import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LazyElementDirective} from "@angular-extensions/elements";

@Component({
  selector: 'app-standalone-lazy-load',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './standalone-lazy-load.component.html',
  imports: [
    LazyElementDirective
  ],
  styleUrl: './standalone-lazy-load.component.scss'
})
export class StandaloneLazyLoadComponent {

  // Example data that is passed to the element via property binding.
  data = { message: 'Hello from Angular!' };
  elementUrl = 'http://localhost:3855/assets/module/my-custom-element.js';
  handleChange(ev: any) {
    console.log('ev - ', ev);
  }
}
