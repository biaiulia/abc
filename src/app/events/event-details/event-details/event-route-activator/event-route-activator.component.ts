import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventServiceService } from 'src/app/events/shared/eventService.service';

@Component({
  selector: 'app-event-route-activator',
  templateUrl: './event-route-activator.component.html',
  styleUrls: ['./event-route-activator.component.scss']
})
export class EventRouteActivatorComponent implements OnInit {

  constructor(private eventService: EventServiceService, private router: Router) { }

  ngOnInit() {
  }
  canActivate(route: ActivatedRouteSnapshot){
    const eventExists = this.eventService.getEvent(+route.params['id'])

    if(!eventExists){
      this.router.navigate(['/404'])
    }
    return true;
  }

}
