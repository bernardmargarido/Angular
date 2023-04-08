import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})

export class CheckComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy, AfterViewInit {

  @Input() teste!: string 

  public name?: string = ""
  public age?: number = 0

  constructor(){
    console.log("<< constructor >>")
  }

  ngOnInit(): void {
    console.log("<< OnInit >>")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("<< OnChanges >>")
  }

  ngDoCheck(): void {
    console.log("<< DoCheck >>")
  }

  ngAfterContentInit(): void {
    console.log("<< AfterContentInit >>")
  }

  ngAfterContentChecked(): void {
    console.log("<< AfterContentChecked >>")
  }

  ngAfterViewChecked(): void {
    console.log("<< AfterViewChecked >>")
  }

  ngAfterViewInit(): void {
    console.log("<< AfterViewInit >>")
  }

  ngOnDestroy(): void {
    console.log("<< OnDestroy >>")
  }
  

}
