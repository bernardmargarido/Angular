import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor(){
    console.log("<< constructor >> - Check Child")
  }

  ngOnInit(): void {
    console.log("<< OnInit >> - Check Child")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("<< OnChanges >> - Check Child ")
  }

  ngDoCheck(): void {
    console.log("<< DoCheck >> - Check Child")
  }

  ngAfterContentInit(): void {
    console.log("<< AfterContentInit >> - Check Child ")
  }

  ngAfterContentChecked(): void {
    console.log("<< AfterContentChecked >> - Check Child ")
  }

  ngAfterViewChecked(): void {
    console.log("<< AfterViewChecked >> - Check Child ")
  }

  ngAfterViewInit(): void {
    console.log("<< AfterViewInit >> - Check Child ")
  }

  ngOnDestroy(): void {
    console.log("<< OnDestroy >> - Check Child ")
  }


}
