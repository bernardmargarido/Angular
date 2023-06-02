import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, Observer, never } from 'rxjs';

@Component({
  selector: 'app-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.css']
})

export class HotObservablesIntroComponent implements OnInit, AfterViewInit{
 
  @ViewChild('myButton') button: any = ElementRef;

  n1:number = 0 
  n2:number = 0
  s1:string = '' 
  s2:string = ''
  
  constructor() { }

  buttonClick(){
    
    let myBtnClickObservable: Observable<any> = fromEvent(
    this.button.nativeElement , 'click');

    myBtnClickObservable.subscribe( (event) => console.log('button clicked 1'));
    myBtnClickObservable.subscribe( (event) => console.log('button clicked 2'));

  }

  ngOnInit(): void {
   
    class Producer {
   
      public myListeners: any[] = [];
      public n: number = 0;
      public id:any;
            
      addListener(l: any){
        this.myListeners.push(l);
        console.log(this.myListeners.length);
      }

      start() {
        this.id = setInterval(()=>{
          this.n++;
          console.log('<< start >> - From Producer: ' + this.n);
          for(let l of this.myListeners)
            l(this.n);
        },1000);
      }
  
      stop(){
        clearInterval(this.id);
      }
     
    }

    let producer: Producer = new Producer();
    producer.start();
    setTimeout( () => {
      producer.addListener((n: any) => console.log('From listner 1', n));
      producer.addListener((n: any) => console.log('From listner 2', n));
      producer.addListener((n: any) => console.log('From listner 3', n));
    }, 4000);

    const myHotObservable = new Observable(
      (observer: Observer<number>) => {
        producer.addListener( (n: any) => observer.next(n));
      }
    );

    myHotObservable.subscribe((n) => console.log('From Subscriber 1', n));
    myHotObservable.subscribe((n) => console.log('From Subscriber 2', n));

  }

  ngAfterViewInit(): void {
    this.buttonClick();
   }
   
  

 

}