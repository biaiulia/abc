import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsListComponent } from 'src/app/events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-list/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventServiceService } from './events/shared/eventService.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './nav/navbar/routes';
import { CreateEventComponent } from './events/shared/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorComponent } from './events/event-details/event-details/event-route-activator/event-route-activator.component';
//import { EventsListComponent } from './events/events-list/events-list.component';


@NgModule({
  declarations: [		
    AppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavbarComponent,
      EventDetailsComponent,
      CreateEventComponent,
      Error404Component

   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [ EventServiceService,
  ToastrService,
    EventRouteActivatorComponent,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState // dc nu meere?
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}