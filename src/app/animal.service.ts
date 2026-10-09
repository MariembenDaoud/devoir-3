
import { Injectable } from '@angular/core';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animaux: Animal[] = [
    {
      idAnimal: 1,
      nomAnimal: 'Milo',
      espece: 'Chat',
      age: 2,
      dateNaissance: new Date('2024-05-10')
    },
    {
      idAnimal: 2,
      nomAnimal: 'Rex',
      espece: 'Chien',
      age: 3,
      dateNaissance: new Date('2023-02-15')
    }
  ];

  getAnimaux(): Animal[] {
    return this.animaux;
  }

  ajouterAnimal(animal: Animal): boolean {
    if (this.animaux.some(a => a.idAnimal === animal.idAnimal)) {
      return false;
    }

    this.animaux.push({
      ...animal,
      dateNaissance: new Date(animal.dateNaissance)
    });

    return true;
  }

  modifierAnimal(animalModifie: Animal): void {
    const index = this.animaux.findIndex(
      a => a.idAnimal === animalModifie.idAnimal
    );

    if (index !== -1) {
      this.animaux[index] = {
        ...animalModifie,
        dateNaissance: new Date(animalModifie.dateNaissance)
      };
    }
  }

  supprimerAnimal(id: number): void {
    this.animaux = this.animaux.filter(
      a => a.idAnimal !== id
    );
  }
}