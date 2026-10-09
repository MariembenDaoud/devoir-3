
import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-add-animal',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, RouterLink],
  templateUrl: './add-animal.html',
  styleUrl: './add-animal.css'
})
export class AddAnimal {

  newAnimal: Animal = {
    idAnimal: 0,
    nomAnimal: '',
    espece: '',
    age: 0,
    dateNaissance: new Date()
  };

  constructor(
    private animalService: AnimalService,
    private router: Router
  ) {}

  changerDateNaissance(date: string): void {
    if (date) {
      this.newAnimal.dateNaissance = new Date(date + 'T00:00:00');
    }
  }

  addAnimal(): void {
    if (
      this.newAnimal.idAnimal <= 0 ||
      !this.newAnimal.nomAnimal.trim() ||
      !this.newAnimal.espece.trim() ||
      this.newAnimal.age < 0 ||
      !this.newAnimal.dateNaissance
    ) {
      alert('Veuillez remplir correctement tous les champs.');
      return;
    }

    const ajoute = this.animalService.ajouterAnimal(this.newAnimal);

    if (!ajoute) {
      alert('Cet identifiant existe déjà.');
      return;
    }

    alert('Animal ajouté avec succès !');
    this.router.navigate(['/animaux']);
  }
}