import { Routes } from '@angular/router';
import { Error404Component } from 'src/app/errors/404.component';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details/event-details.component';
import { EventRouteActivatorComponent } from 'src/app/events/event-details/event-details/event-route-activator/event-route-activator.component';
import { EventsListComponent } from 'src/app/events/events-list/events-list.component';
import { CreateEventComponent } from 'src/app/events/shared/create-event/create-event.component';

export const appRoutes : Routes= [
    { path: 'events', component: EventsListComponent},
    { path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
    },
    { path: 'events/:id', component: EventDetailsComponent,
canActivate: [EventRouteActivatorComponent]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]