import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import {
  CLASS_NAME,
  DISMISS_REASONS,
  ModalOptions,
  TRANSITION_DURATIONS
} from './modal-options.class';
import { BsModalService } from './bs-modal.service';
import { document } from 'ngx-bootstrap/utils';
import { FocusTrapDirective } from 'ngx-bootstrap/focus-trap';

@Component({
    selector: 'modal-container',
    template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')"
         role="document"
         focusTrap>
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
    host: {
        class: 'modal',
        role: 'dialog',
        tabindex: '-1',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'config.ariaLabelledBy',
        '[attr.aria-describedby]': 'config.ariaDescribedby'
    },
    standalone: true,
    imports: [FocusTrapDirective],
    providers: [BsModalService]
})
export class ModalContainerComponent implements OnInit, OnDestroy {
  config: ModalOptions;
  isShown = false;
  level?: number;
  isAnimated = false;
  bsModalService?: BsModalService;
  _focusEl: Element | null = null;
  private isModalHiding = false;
  private clickStartedInContent = false;

  constructor(options: ModalOptions,
              protected _element: ElementRef,
              private _renderer: Renderer2) {
    this.config = Object.assign({}, options);
  }

  ngOnInit(): void {
    this._focusEl = document.activeElement;
    if (this.isAnimated) {
      this._renderer.addClass(
        this._element.nativeElement,
        CLASS_NAME.FADE
      );
    }
    this._renderer.setStyle(
      this._element.nativeElement,
      'display',
      'block'
    );
    setTimeout(() => {
      this.isShown = true;
      this._renderer.addClass(
        this._element.nativeElement,
        CLASS_NAME.SHOW
      );
    }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
    if (document && document.body) {
      if (this.bsModalService && this.bsModalService.getModalsCount() === 1) {
        this.bsModalService.checkScrollbar();
        this.bsModalService.setScrollbar();
      }
      this._renderer.addClass(document.body, CLASS_NAME.OPEN);
      this._renderer.setStyle(document.body, 'overflow-y', 'hidden');
    }
    if (this._element.nativeElement) {
      this._element.nativeElement.focus();
    }
  }

  @HostListener('mousedown', ['$event'])
  onClickStarted(event: MouseEvent): void {
    this.clickStartedInContent = event.target !== this._element.nativeElement;
  }

  @HostListener('click', ['$event'])
  onClickStop(event: MouseEvent): void {
    const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
    if (
      this.config.ignoreBackdropClick ||
      this.config.backdrop === 'static' ||
      !clickedInBackdrop
    ) {
      this.clickStartedInContent = false;

      return;
    }
    this.bsModalService?.setDismissReason(DISMISS_REASONS.BACKRDOP);
    this.hide();
  }

  @HostListener('window:popstate')
  onPopState(): void {
    this.bsModalService?.setDismissReason(DISMISS_REASONS.BACK);
    this.hide();
  }

  @HostListener('window:keydown.esc', ['$event'])
  onEsc(event: KeyboardEvent): void {
    if (!this.isShown) {
      return;
    }

    if (event.keyCode === 27 || event.key === 'Escape') {
      event.preventDefault();
    }

    if (
      this.config.keyboard &&
      this.level === this.bsModalService?.getModalsCount()
    ) {
      this.bsModalService?.setDismissReason(DISMISS_REASONS.ESC);
      this.hide();
    }
  }

  ngOnDestroy(): void {
    if (this.isShown) {
      this._hide();
    }
  }

  hide(): void {
    if (this.isModalHiding) {
      return;
    }

    if (this.config.closeInterceptor) {
      this.config.closeInterceptor().then(
        () => this._hide(),
        () => undefined);

      return;
    }

    this._hide();
  }

  private _hide(): void {
    this.isModalHiding = true;
    this._renderer.removeClass(
      this._element.nativeElement,
      CLASS_NAME.SHOW
    );
    setTimeout(() => {
      this.isShown = false;
      this.bsModalService?.hide(this.config.id);
      if (
        document &&
        document.body &&
        this.bsModalService?.getModalsCount() === 0
      ) {
        this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
        this._renderer.setStyle(document.body, 'overflow-y', '');
      }
      this.bsModalService?.hide(this.config.id);
      this.isModalHiding = false;
      if (this._focusEl) {
        (this._focusEl as HTMLElement).focus();
      }
    }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
  }
}
