import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  names = [
    "Bernard",
    "Ana Carolina",
    "Laura",
    "Isabela"
  ]

  cities = [
    {name: "Sao Paulo", state: "SP"},
    {name: "Porto Alegre", state: "RS"},
    {name: "Curitiba", state: "PR"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Vitoria", state: "ES"},
    {name: "Salvador", state: "BA"}

  ]
}
