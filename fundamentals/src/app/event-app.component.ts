import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <app-events-list></app-events-list>
  `
})
export class EventsAppComponent {
  title = 'fundamentals';
}
