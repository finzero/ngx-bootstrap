import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-dropdown-disabled',
  templateUrl: './disabled-menu.html',
  standalone: false
})
export class DemoDropdownDisabledComponent {
  disabled = false;
}
