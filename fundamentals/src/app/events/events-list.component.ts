import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <app-event-thumbnail [event]="event"></app-event-thumbnail>
  </div>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    time: '10:00 am',
    date: '9/26/2036',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
