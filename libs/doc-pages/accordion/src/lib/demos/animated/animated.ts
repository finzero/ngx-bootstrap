import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-accordion-animation',
  templateUrl: './animated.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAccordionAnimatedComponent {}

