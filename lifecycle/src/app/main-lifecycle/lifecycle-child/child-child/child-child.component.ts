import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})

export class ChildChildComponent {
  
  @Input() name?: string

  ngOnInit(){
    console.log("<< ChildChild - OnInit >>  " + this.name)
  }

  ngOnChanges(){
    console.log("<< ChildChild - OnChanges >>  " + this.name)
  }

  ngAfterContentInit(){
    console.log("<< ChildChild - AfterContentInit >>  " + this.name)
  }


}
