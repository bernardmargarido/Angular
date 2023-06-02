import { Component, OnInit, Input } from '@angular/core';
import { DataModel } from 'src/app/datamodel';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})

export class SubjectChildComponent implements OnInit {

  @Input() subject: Subject<DataModel>;
  @Input() name: string; 

  public log: string[] = [];
  public connected: boolean = false;

  constructor(){
  }

  ngOnInit(): void {
  }

  connect(){

  }

  disconnect(){

  }

}
