import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

     public name:string = 'iron Man';
     public age : number = 45;

     get capitalizedNamw():string{
      return this.name.toUpperCase()
     }
     getHerooeDescription ():string {
      return `${this.name} - ${this.age}`
     }
     changeHeroe():void {
      this.name = 'SpiderMan'
     }
     changeAge():void{
      this.age =18
     }
     reset() {
      this.name = 'iron Man';
      this.age  = 45;
   }
}
