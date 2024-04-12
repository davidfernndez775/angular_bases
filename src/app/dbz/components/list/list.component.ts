import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // se le agrega el decorador Input para indicar que va a recibir una informacion desde el padre
  @Input()
  // se le deja una informacion para que sirva por defecto en este caso Trunk y 10
  public characterList: Character[] = [{ name: 'Trunk', power: 10 }];

  // definimos el emisor
  @Output()
  public CharacterId: EventEmitter<string> = new EventEmitter();

  onDeleteId(id?: string): void {
    if (!id) return; // si no tengo un id no hago nada
    this.CharacterId.emit(id);
    console.log({ id });
  }

  // onDeleteCharacter(index: number): void {
  //   console.log({ index });
  // }
}
