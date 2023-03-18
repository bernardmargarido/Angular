import { Component, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})

export class InputBindingComponent {
  
  @Input() name?: string
  @Input() lastName?: string 
  @Input() age?: number

  clients?: Client[]

  constructor(){
    this.clients = [
      {id: 1, name: 'Bernard Margararido', age: 40},
      {id: 2, name: 'Ana Carolina Silva', age: 40},
      {id: 3, name: 'Laura Silva Margarido', age: 8},
      {id: 4, name: 'Isabela Silva Margarido', age: 5}
    ]
  }
}
