import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-rating-custom',
  templateUrl: './custom.html',
  standalone: false
})
export class DemoRatingCustomComponent {
  x = 5;
  y = 2;
}
