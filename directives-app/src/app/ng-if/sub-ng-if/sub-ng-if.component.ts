import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-ng-if',
  templateUrl: './sub-ng-if.component.html',
  styleUrls: ['./sub-ng-if.component.css']
})
export class SubNgIfComponent {
  constructor(){
    console.log("SubNfIfComponent!")
  }

  ngOnDestroy(){
    console.log("SubNfIfComponent - Destroy")
  }
}
