
import { Routes } from '@angular/router';
import { Animaux } from './animaux/animaux';
import { AddAnimal } from './add-animal/add-animal';

export const routes: Routes = [
  { path: '', redirectTo: 'animaux', pathMatch: 'full' },
  { path: 'animaux', component: Animaux },
  { path: 'ajouter-animal', component: AddAnimal },
  { path: '**', redirectTo: 'animaux' }
];