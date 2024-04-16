import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';
// se usa el decorador Injectable para definir que se trabajara mediante la inyeccion de dependencias
@Injectable({
  providedIn: 'root', // se define root por defecto lo que permite que cuando se inyecte el servicio siempre tenga su valor actualizado
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character, //se le agrega a newCharacter a todas las propiedades contenidas en character
      id: uuid(), // se le agrega un id
    };
    // inserta un elemento al final del array
    this.characters.push(newCharacter);
  }
}
