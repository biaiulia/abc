import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventServiceService } from '../shared/eventService.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @ViewChild('thumbnail', { static: false }) thumbnail: any;
  constructor(private eventService: EventServiceService, private toastr : ToastrService) { 
    
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
  events : any[]
  handleEventClicked(data){
    console.log('received:', data);
    console.log(this.thumbnail);
  }
  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }
  
 

}

