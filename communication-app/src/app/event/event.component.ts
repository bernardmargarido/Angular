import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  value: number = 0
  title = "My title"

  incBy(event: any){
    console.log('number' + event);
    this.value += event
  }
}
