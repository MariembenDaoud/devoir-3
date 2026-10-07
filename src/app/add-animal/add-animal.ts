import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-add-animal',
  imports: [FormsModule],
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

  addAnimal(): void {
    this.animalService.ajouterAnimal(this.newAnimal);
    this.router.navigate(['/animaux']);
  }
}