
import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animaux',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './animaux.html',
  styleUrl: './animaux.css'
})
export class Animaux {
  animaux: Animal[] = [];
  animalSelectionne: Animal | null = null;

  constructor(private animalService: AnimalService) {
    this.chargerAnimaux();
  }

  chargerAnimaux(): void {
    this.animaux = [...this.animalService.getAnimaux()];
  }

  modifierAnimal(animal: Animal): void {
    this.animalSelectionne = {
      ...animal,
      dateNaissance: new Date(animal.dateNaissance)
    };
  }

  changerDateNaissance(date: string): void {
    if (this.animalSelectionne && date) {
      this.animalSelectionne.dateNaissance =
        new Date(date + 'T00:00:00');
    }
  }

  enregistrerModification(): void {
    if (this.animalSelectionne) {
      this.animalService.modifierAnimal(this.animalSelectionne);
      this.animalSelectionne = null;
      this.chargerAnimaux();
    }
  }

  supprimerAnimal(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet animal ?')) {
      this.animalService.supprimerAnimal(id);
      this.chargerAnimaux();
    }
  }

  annulerModification(): void {
    this.animalSelectionne = null;
  }
}