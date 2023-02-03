import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  
  showName: boolean = false;
  showAddress: boolean = false;
  showPhone: boolean = false;
  showAge: boolean = false;

}
