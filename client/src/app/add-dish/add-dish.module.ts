import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDishRoutingModule } from './add-dish-routing.module';
import { AddDishHomeComponent } from './add-dish-home/add-dish-home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [AddDishHomeComponent],
  imports: [
    CommonModule,
    AddDishRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
  ],
})
export class AddDishModule {}
