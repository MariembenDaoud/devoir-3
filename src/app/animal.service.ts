import { Injectable } from '@angular/core';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animaux: Animal[] = [
    {
      idAnimal: 1,
      nomAnimal: 'Milo',
      espece: 'Chat',
      age: 3,
      dateNaissance: new Date('2023-05-10')
    },
    {
      idAnimal: 2,
      nomAnimal: 'Rex',
      espece: 'Chien',
      age: 5,
      dateNaissance: new Date('2021-03-15')
    },
    {
      idAnimal: 3,
      nomAnimal: 'Coco',
      espece: 'Perroquet',
      age: 2,
      dateNaissance: new Date('2024-07-20')
    }
  ];

  getAnimaux(): Animal[] {
    return this.animaux;
  }

  ajouterAnimal(animal: Animal): void {
    this.animaux.push(animal);
  }
}