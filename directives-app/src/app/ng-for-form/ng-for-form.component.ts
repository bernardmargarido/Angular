import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})

export class NgForFormComponent {
  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    {name: "Sao Paulo", state: "SP"},
    {name: "Porto Alegre", state: "RS"},
    {name: "Curitiba", state: "PR"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Vitoria", state: "ES"},
    {name: "Salvador", state: "BA"}

  ]

  clients: any[] = [];

  save(){
    
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        phone: this.phone,
        age: this.age
      }
    );
    this.cancel();
  }

  cancel(){
    this.name   = "";
    this.address= ""; 
    this.city   = "";
    this.phone  = "";
    this.age    = 0;
  }

  delete(i: number){
    this.clients.splice(i, 1);
  }
}
