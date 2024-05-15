import { Character } from './../../interfaces/characters.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter;
  @Input()
  public characterList: Character[]= [
    {
      name: 'Trunks',
      power: 10,
    }
  ]
  public onDdeleteChar(i:string):void{
    this.onDeleteId.emit(i)
  }
}
