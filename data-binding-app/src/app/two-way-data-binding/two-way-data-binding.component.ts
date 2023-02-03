import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})

export class TwoWayDataBindingComponent {
  name1: string = "Bernard"
  name2: string = "Margarido"

  client = {
    firstName: "Bernard",
    lastName: "Margarido",
    address: "Rua ministro apolonio salles, 212",
    age: 40
  }
}
