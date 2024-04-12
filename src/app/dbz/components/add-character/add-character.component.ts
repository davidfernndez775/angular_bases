import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  // variable que recibe la informacion emitida desde el formulario
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // se define el objeto que se va a recibir desde el formulario
  public character: Character = {
    name: '',
    power: 0,
  };

  // se crea la funcion que va a ejecutar el formulario
  emitCharacter(): void {
    // se hace una validacion para evitar nombres vacios
    if (this.character.name.length === 0) {
      return;
    }
    // se muestra el valor introducido en consola (opcional)
    console.log(this.character);
    // se emite la informacion a la variable onNewCharacter
    this.onNewCharacter.emit(this.character);
    // se reinician los valores en el formulario
    this.character = { name: '', power: 0 };
  }
}
