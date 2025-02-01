import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-standalone-lazy-load',
  standalone: true,
  // imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './standalone-lazy-load.component.html',
  styleUrl: './standalone-lazy-load.component.scss'
})
export class StandaloneLazyLoadComponent {

  data = {};
  elementUrl = 'https://your-org.com/elements/some-element.js';
  handleChange(ev: any) {
    console.log('ev - ', ev);
  }
}
