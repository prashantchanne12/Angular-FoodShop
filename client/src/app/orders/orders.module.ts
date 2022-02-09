import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [OrdersHomeComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class OrdersModule {}
