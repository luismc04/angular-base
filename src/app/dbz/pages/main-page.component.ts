import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'app-dbz-main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService){

  }
  get characters ():Character[]{
    return [...this.dbzService.characters]
  }
  onDeleteCharacter (id: string):void{
    this.dbzService.deleChar(id)
  }
  onNewCharacter (c: Character):void{
    this.dbzService.onNewCharacter(c)
  }
}
