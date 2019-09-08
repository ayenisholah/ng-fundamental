import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './event-app.component';

@NgModule({
  declarations: [
    EventsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
