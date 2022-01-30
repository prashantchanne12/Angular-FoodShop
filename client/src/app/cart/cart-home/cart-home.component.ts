import { Component, OnInit } from '@angular/core';
import { Food, CartService } from '../../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css'],
})
export class CartHomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'price', 'remove'];
  subtotal = 0;
  currentUser = false;

  constructor(public cartService: CartService, private _snackBar: MatSnackBar) {
    this.getNewSubtotal();
    const user = localStorage.getItem('current-food-shop-user');

    if (user) {
      this.currentUser = true;
    }
  }

  ngOnInit(): void {}

  onQuantityAdd(item: Food) {
    item.quantity += 1;
    this.cartService.addToCart(item);
    this.getNewSubtotal();
  }

  onQuantityRemove(item: Food) {
    item.quantity -= 1;

    if (item.quantity === 0) {
      this.cartService.removeFromCart(item);
      this._snackBar.open(`${item.name} removed from bag`, '', {
        duration: 3000,
      });
      this.getNewSubtotal();
      return;
    }

    this.cartService.addToCart(item);
    this.getNewSubtotal();
  }

  onItemRemove(item: Food) {
    this.cartService.removeFromCart(item);
    this.getNewSubtotal();
    this._snackBar.open(`${item.name} removed from bag`, '', {
      duration: 3000,
    });
  }

  getNewSubtotal() {
    this.subtotal = 0;
    this.cartService.cart.forEach((item) => {
      this.subtotal += item.total;
    });
  }
}
