import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})

export class NameComponent {

  private _name = "";

  @Input()
  set name(name: string){
    this._name = "Yor name: " + (name.toUpperCase() || '<name empty>');
  }

  get name(): string{
    return this._name
  }
}
