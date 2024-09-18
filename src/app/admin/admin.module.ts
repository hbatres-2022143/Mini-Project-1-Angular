import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';

const routes: Routes = [
  { path: '', title: 'Dogs', component: DogsComponent } 
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes) ]
})
export class AdminModule {}
