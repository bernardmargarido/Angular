import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {
  public milisegundos: number = 0
  public interval: any
  public running = false

  start(){
    if(!this.running){
      this.running = true
      this.interval = setInterval(() => {
        this.milisegundos += 50;
      }, 50)
    }
  }

  stop(){
    if(this.running){
      clearInterval(this.interval)
      this.running = false
    }
  }

  clear(){
    this.milisegundos = 0;
  }

  public round(n: number){
    return Math.round(n)
  }

}
