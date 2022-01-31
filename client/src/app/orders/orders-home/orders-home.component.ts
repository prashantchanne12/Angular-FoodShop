import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/service/cart.service';
import { Order, OrdersService } from 'src/app/service/orders.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.css'],
})
export class OrdersHomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'quantity', 'price'];

  orders: Food[] = [];

  constructor(
    public ordersService: OrdersService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.ordersService.getOrders(user[0]).subscribe((order) => {
        order.forEach((item) => {
          item.orders.forEach((o) => {
            this.orders.push(o);
          });
        });
      });
    });
  }
}
