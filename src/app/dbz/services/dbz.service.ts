import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]= [
    {
      id:uuid(),
      name: 'krillin',
      power:1000
    },
    {
      id:uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id:uuid(),
      name: 'Vegeta',
      power: 7500
    },

    ];

    onNewCharacter(c: Character):void{
      const newCha : Character = { id:uuid(),...c }
        this.characters.push(newCha)
    }
    deleChar(i:string):void{
      this.characters = this.characters.filter(c => c.id !== i )
    }
}
