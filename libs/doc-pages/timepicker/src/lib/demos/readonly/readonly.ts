import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-timepicker-readonly',
  templateUrl: './readonly.html',
  standalone: false
})
export class DemoTimepickerReadonlyComponent {
  isMeridian = false;
  readonly = true;
  myTime = new Date();
}
