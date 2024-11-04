import {
  Component, HostBinding, Inject, OnDestroy, OnInit, input, output, model
} from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgClass, NgIf } from '@angular/common';

/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
@Component({
    selector: 'accordion-group, accordion-panel',
    templateUrl: './accordion-group.component.html',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'panel',
        style: 'display: block'
    },
    styleUrls: ['./accordion.scss'],
    standalone: true,
    imports: [NgClass, NgIf, CollapseModule]
})
export class AccordionPanelComponent implements OnInit, OnDestroy {
  /** turn on/off animation */
  isAnimated = false;
  /** Clickable text in accordion's group header, check `accordion heading` below for using html in header */
  public heading = input<string>();
  /** Provides an ability to use Bootstrap's contextual panel classes
   * (`panel-primary`, `panel-success`, `panel-info`, etc...).
   * List of all available classes [available here]
   * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
   */
  public panelClass = input<string>('panel-default');
  /** if <code>true</code> — disables accordion group */
  public isDisabled = input<boolean>(false);
  /** Emits when the opened state changes */
  public isOpenChange = output<boolean>();

  // Questionable, maybe .panel-open should be on child div.panel element?
  /** Is accordion group open or closed. This property supports two-way binding */
  @HostBinding('class.panel-open')
  public isOpen = model<boolean>(false);

  protected _isOpen = false;
  protected accordion: AccordionComponent;

  constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;

    this.isOpen.subscribe((value) => {
      if (value !== this._isOpen) {
        if (value) {
          this.accordion.closeOtherPanels(this);
        }
        this._isOpen = value;
        this.isOpenChange.emit(value);
      }
    });
  }

  ngOnInit(): void {
    this.accordion.addGroup(this);
  }

  ngOnDestroy(): void {
    this.accordion.removeGroup(this);
  }

  toggleOpen(): void {
    if (!this.isDisabled()) {
      this.isOpen.set(!this.isOpen());
    }
  }
}
