import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <app-nav></app-nav>
    <app-events-list></app-events-list>
  `
})
export class EventsAppComponent {
  title = 'fundamentals';
}
