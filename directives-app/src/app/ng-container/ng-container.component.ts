import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})

export class NgContainerComponent {
  users = [
    { login: 'bernard', role: 'admin', lastlogin: new Date('3/1/2023')},
    { login: 'anacarolina', role: 'user', lastlogin: new Date('3/1/2023')},
    { login: 'laura', role: 'user', lastlogin: new Date('3/1/2023')},
    { login: 'isabela', role: 'user', lastlogin: new Date('3/1/2023')}
  ]
}
