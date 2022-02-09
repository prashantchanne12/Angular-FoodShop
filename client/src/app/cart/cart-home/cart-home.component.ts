import { Component, OnInit } from '@angular/core';
import { Food, CartService } from '../../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css'],
})
export class CartHomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'price', 'remove'];
  subtotal = 0;
  currentUser = false;
  cart: Food[] = [];
  loading = true;

  constructor(
    public cartService: CartService,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      this.getNewSubtotal();
      this.loading = false;
    });

    this.userService.getCurrentUser().subscribe((user) => {
      if (user.length > 0) {
        this.currentUser = true;
      }
    });
  }

  onQuantityAdd(item: Food) {
    item.quantity += 1;
    item.total = item.quantity * item.price;
    this.cartService.addToCart(item);
    this.getNewSubtotal();
  }

  onQuantityRemove(item: Food) {
    item.quantity -= 1;
    item.total = item.quantity * item.price;

    if (item.quantity === 0) {
      this.cartService.removeFromCart(item).subscribe(() => {
        this.updateUI(item);
        this._snackBar.open(`${item.name} removed from bag`, '', {
          duration: 3000,
        });
        this.getNewSubtotal();
      });
    } else {
      this.cartService.addToCart(item);
      this.getNewSubtotal();
    }
  }

  onItemRemove(item: Food) {
    this.cartService.removeFromCart(item).subscribe(() => {
      this.getNewSubtotal();
      this.updateUI(item);
      this._snackBar.open(`${item.name} removed from bag`, '', {
        duration: 3000,
      });
    });
  }

  getNewSubtotal() {
    this.subtotal = 0;
    this.cart.forEach((item) => {
      this.subtotal += item.total;
    });
  }

  updateUI(item: Food) {
    this.cart = this.cart.filter((food) => food.id !== item.id);
  }
}
