import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'toggle-manual-demo',
  templateUrl: './toggle-manual.html',
  standalone: false
})
export class ToggleManualDemoComponent {
  isOpen = false;
}
