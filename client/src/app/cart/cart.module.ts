import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CartHomeComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CartModule {}
