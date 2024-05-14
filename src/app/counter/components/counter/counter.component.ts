import {Component} from "@angular/core"

@Component({
  selector:'app-counter',
  template: `
    <h3>Count: {{counter}}</h3>
    <button (click)="increasedBy(1)">+1</button>
    <button (click)="increasedBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `
  ,
})

export class CounterComponent{
  counter: number = 10;


  increasedBy(value:number):void{
    this.counter+=value;
  }
  reset(){
    this.counter = 10
  }
}
