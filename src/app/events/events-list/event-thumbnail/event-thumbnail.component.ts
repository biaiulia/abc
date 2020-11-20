import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() event: any
  @Output() eventClick = new EventEmitter()
  someProperty: any
  handleClickMe(){
    this.eventClick.emit(this.event.name);
  }
  logFoo() {
    console.log('Foo')
  }
  getStartTimeClass(){
    const isEarlyStart = this.event && this.event.time === '8:00 am'
    return {green: isEarlyStart}//, bold:'bold' }
  }
}
