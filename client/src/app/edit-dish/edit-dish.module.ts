import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDishRoutingModule } from './edit-dish-routing.module';
import { EditDishHomeComponent } from './edit-dish-home/edit-dish-home.component';


@NgModule({
  declarations: [
    EditDishHomeComponent
  ],
  imports: [
    CommonModule,
    EditDishRoutingModule
  ]
})
export class EditDishModule { }
