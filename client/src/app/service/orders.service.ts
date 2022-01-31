import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Food } from './cart.service';
import { User } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export interface Order {
  id: number;
  userId: number;
  orders: Food[];
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Food[] = [];
  private apiUrl = 'http://localhost:5000/orders';

  constructor(private http: HttpClient) {}

  addOrders(items: Food[], user: User) {
    // const url = `${this.apiUrl}/orders/${user.id}`;

    const data: Order = {
      id: new Date().getTime(),
      userId: user.id,
      orders: items,
    };
    return this.http.post<Order>(this.apiUrl, data, httpOptions);

    // this.getOrders(user).subscribe((order) => {
    //   if (order) {
    //     const orders: Food[] = [...order.orders, ...items];
    //     return this.http.put<Order>(url, orders, httpOptions);
    //   }

    //   const data: Order = {
    //     id: user.id,
    //     orders: items,
    //   };
    //   return this.http.post<Order>(this.apiUrl, data, httpOptions);
    // });
  }

  getOrders(user: User): Observable<Order[]> {
    const url = `${this.apiUrl}?userId=${user.id}`;
    return this.http.get<Order[]>(url);
  }
}
