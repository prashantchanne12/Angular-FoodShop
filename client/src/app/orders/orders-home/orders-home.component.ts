import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.css'],
})
export class OrdersHomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'quantity', 'price'];

  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {}
}
