// moment.js (patched version)
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com

import './units/index';
import { formatFunctions, makeFormatFunction } from './format/format';
import { Locale } from './locale/locale.class';
import { getLocale } from './locale/locales';
import { isDateValid } from './utils/type-checks';

// Define allowed locales to prevent prototype pollution
const allowedLocales = ['en', 'fr', 'de', 'es', 'zh', 'ja']; // Extend as needed

export function formatDate(date: Date, format?: string, locale?: string, isUTC?: boolean, offset = 0): string {
  // Validate locale input
  const safeLocale = allowedLocales.includes(locale as string) ? locale : 'en';
  const _locale = getLocale(safeLocale);

  if (!_locale) {
    throw new Error(`Locale "${locale}" is not defined, please add it with "defineLocale(...)"`);
  }

  const _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');

  const output = formatMoment(date, _format, _locale, isUTC, offset);

  if (!output) {
    return _locale.invalidDate;
  }

  return _locale.postformat(output);
}

// Format date using native date object
export function formatMoment(date: Date, _format: string, locale: Locale, isUTC?: boolean, offset = 0): string {
  // Ensure date is a valid Date object and not null/undefined
  if (!isDateValid(date)) {
    return locale.invalidDate;
  }

  const format = expandFormat(_format, locale);
  formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

  return formatFunctions[format](date, locale, isUTC, offset);
}

// Secure regex pattern to prevent ReDoS attacks
export function expandFormat(_format: string, locale: Locale): string {
  let format = _format;
  let i = 5;
  const localFormattingTokens = /(\[[^\[\]]{1,20}\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

  const replaceLongDateFormatTokens = (input: string) => {
    return locale.formatLongDate(input) || input;
  };

  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format)) {
    format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }

  return format;
}
