import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
