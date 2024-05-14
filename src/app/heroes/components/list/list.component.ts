import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public delHeroe? :string;
  public heroeNames: string[] = ['SpiderMan', 'Hulk', 'Wanda', 'Thor']

  removeLastHeroe():void{
     this.delHeroe = this.heroeNames.pop()
  }
}
