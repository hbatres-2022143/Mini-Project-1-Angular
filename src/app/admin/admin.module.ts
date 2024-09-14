import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, FormsModule, HttpClientModule]
})
export class AdminModule {}
