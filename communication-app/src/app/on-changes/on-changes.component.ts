import { Component } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})

export class OnChangesComponent {
  name = ''
  newName = ''

  updateName(){
    this.newName = this.name
  }
}
