import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})

export class ChildItemComponent {
  @Input()  title?: string
  @Output() inc = new EventEmitter<number>();
  //@Output() plusOne = new EventEmitter<any>();
  //@Output() plusTwo = new EventEmitter<any>();
  //@Output() minusOne = new EventEmitter<any>();
  //@Output() minusTwo = new EventEmitter<any>();

  btnClick(n: any) {
    this.inc.emit(n)
  }

  /*
  plusOneClick() {
    this.inc.emit(1)
  }
  
  plusTwoClick() {
    this.inc.emit(2)
  }
  
  minusOneClick() {
    this.inc.emit(-1)
  }

  minusTwoClick() {
    this.inc.emit(-2)
  }
  */
}
