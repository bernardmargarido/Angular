import {  AfterContentInit, AfterViewInit, Component,  Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent{
  id: number
  name: string
  color: string
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})

export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {
  @Input() name!: string;
  @Input() age!: number;
  @Input() food!: string;

  public events: LifeCycleEvent[] = []
  
  nextEventId: number = 0
  colors: string[] = ["accent","warn","primary"]

  private intervalRef: ReturnType<typeof setInterval> | undefined;
  
  constructor(){
    console.log(this.name + " - constructor")
    this.newEvent("Constructor")
    this.intervalRef = setInterval(()=>{console.log('Interval')}, 2000)
  }

  ngOnInit(): void {
    console.log(this.name + " - OnInit")
    this.newEvent("OnInit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.name + " - OnChanges")
    this.newEvent("OnChanges")
    /*
    if(changes['name']){
      console.log('New Name ' + changes['name'].currentValue)
      console.log('Old Name ' + changes['name'].previousValue)
    }

    for(let propName in changes){
      console.log(propName)
      console.log(changes[propName])
    }
    */    
  }

  ngOnDestroy(): void {
    console.log(this.name + " - OnDestroy")
    this.newEvent("OnDestroy")
    clearInterval(this.intervalRef)
  }

  ngAfterContentInit(): void {
    console.log(this.name + " - AfterContentInit")
    this.newEvent("AfterContentInit")
  }

  ngAfterViewInit(): void {
    console.log(this.name + " - AfterViewInit")
    this.newEvent("AfterViewInit")
  }

  newEvent(name: string){
    let id = this.nextEventId++
    this.events.push({
      id: id,
      color: this.colors[id % this.colors.length],
      name: name
    })

    setTimeout(()=>{
      let idBtn = this.events.findIndex((e) => e.id == id)
      if(idBtn >= 0){
        this.events.splice(idBtn,1)
      }
    }, 3000 + this.events.length * 2000)
  }

}
