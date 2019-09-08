import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <h2>Hello World</h2>
    <img src="assets/images/basic-shield.png" />
    <app-events-list></app-events-list>
  `
})
export class EventsAppComponent {
  title = 'fundamentals';
}
