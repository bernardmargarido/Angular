import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})

export class NameChangesComponent implements OnChanges {
  @Input() name?: string; 

  nameBefore?: string;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    //console.log(changes)
    if(changes.hasOwnProperty('name')){
      this.nameBefore = changes['name'].previousValue
    }
  }

}
