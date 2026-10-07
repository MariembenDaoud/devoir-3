import { Routes } from '@angular/router';
import { Animaux } from './animaux/animaux';
import { AddAnimal } from './add-animal/add-animal';

export const routes: Routes = [
  {
    path: 'animaux',
    component: Animaux
  },
  {
    path: 'add-animal',
    component: AddAnimal
  },
  {
    path: '',
    redirectTo: 'animaux',
    pathMatch: 'full'
  }
];