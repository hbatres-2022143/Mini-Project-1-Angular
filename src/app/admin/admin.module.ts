import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [{ path: '', title: 'Dogs', component: DogsComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: []
})
export class AdminModule {}
