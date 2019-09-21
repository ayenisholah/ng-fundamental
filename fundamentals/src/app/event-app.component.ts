import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'fundamentals';
}
