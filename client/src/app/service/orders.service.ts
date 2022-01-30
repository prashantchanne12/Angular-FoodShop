import { Food } from './cart.service';

export class OrdersService {
  constructor() {
    //   get local orders
    const orders = localStorage.getItem('orders');
    if (orders && this.orders.length === 0) {
      this.orders = JSON.parse(orders);
    }
  }

  orders: Food[] = [];

  addOrders(orders: Food[]) {
    this.orders = [...this.orders, ...orders];

    // local storage
    const ordersLocal = localStorage.getItem('orders');

    if (!ordersLocal) {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    } else {
      const ordersLocalParsed = JSON.parse(ordersLocal);

      const newOrders = [...ordersLocalParsed, ...orders];

      localStorage.setItem('orders', JSON.stringify(newOrders));
    }
  }
}
