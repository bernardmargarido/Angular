import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  FirstName = 'Bernard';

  person = {
    fisrtname: 'Bernard',
    lastname: 'Margarido',
    age:40,
    adress: 'Rua Ministro Apolonio Salles'
  }
}
