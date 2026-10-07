import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animaux',
  imports: [DatePipe],
  templateUrl: './animaux.html',
  styleUrl: './animaux.css'
})
export class Animaux {

  animaux: Animal[] = [];

  constructor(private animalService: AnimalService) {
    this.animaux = this.animalService.getAnimaux();
  }
}