import { Component, effect, input } from '@angular/core';
import { AccordionPanelComponent } from './accordion-group.component';
import { AccordionConfig } from './accordion.config';

/** Displays collapsible content panels for presenting information in a limited amount of space. */
@Component({
    selector: 'accordion',
    template: `<ng-content></ng-content>`,
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        '[attr.aria-multiselectable]': '_closeOthers',
        role: 'tablist',
        class: 'panel-group',
        style: 'display: block'
    },
    standalone: true
})
export class AccordionComponent {
  /** turn on/off animation */
  isAnimated = input<boolean>(false);
  _isAnimated = this.isAnimated();

  /** if `true` expanding one item will close all others */
  closeOthers = input<boolean>(false);
  _closeOthers = this.closeOthers();

  protected groups: AccordionPanelComponent[] = [];

  constructor(config: AccordionConfig) {
    Object.assign(this, config);
    effect(() => {
      this._isAnimated = this.isAnimated();
      this._closeOthers = this.closeOthers();

    });
  }

  closeOtherPanels(openGroup: AccordionPanelComponent): void {
    if (!this._closeOthers) {
      return;
    }

    this.groups.forEach((group: AccordionPanelComponent) => {
      if (group !== openGroup) {
        group.isOpen.set(false);
      }
    });
  }

  addGroup(group: AccordionPanelComponent): void {
    group.isAnimated = this._isAnimated;
    this.groups.push(group);
  }

  removeGroup(group: AccordionPanelComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
