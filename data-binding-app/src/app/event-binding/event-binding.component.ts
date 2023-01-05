import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})

export class EventBindingComponent {
  constructor() { }
  buttonName = "MyButton";
  i = 0;
  btnEnable = true;
  spinnerMode = 'determinate'
  spinnerColor= 'primary'
  spinnerValue= 0

  save(){
    console.log("Click");
  }

  inc(){
    this.i++;
    this.buttonName = 'It was clicked ' + this.i + " times";
    this.spinnerValue++
  }

  disabled(){
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout( ()=> {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 3000)
  }

  cbChange(){

  }
  
  ngOnInit() {
  }


}
