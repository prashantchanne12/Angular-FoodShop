import { Injectable } from '@angular/core';
import { CartLocalService } from './cart.local.service';

export interface Food {
  id: number;
  name: string;
  imgUrl: string;
  desc: string;
  price: number;
  quantity: number;
  category: string[];
  total: number;
}

@Injectable()
export class CartService {
  constructor(private cartLocalService: CartLocalService) {
    if (cartLocalService.getCartItemsFromLocalStorage()) {
      this.cart = cartLocalService.getCartItemsFromLocalStorage();
    }
  }

  cart: Food[] = [];
  addedToCart = false;

  addToCart(item: Food) {
    this.addedToCart = true;

    const index = this.cart.findIndex((c) => c.id === item.id);

    if (index === -1) {
      this.cart.push(item);
      this.cartLocalService.addCartItemToLocalStorage(item);
    } else {
      this.cart[index].quantity = item.quantity;
      this.cart[index].total = item.quantity * this.cart[index].price;
      this.cartLocalService.setNewCart(this.cart);
    }
  }

  removeFromCart(item: Food) {
    this.cart = this.cart.filter((c) => c.id !== item.id);
    this.cartLocalService.setNewCart(this.cart);
  }

  getCartCount(): number {
    return this.cart.length;
  }

  emptyCart() {
    this.cart = [];
    this.cartLocalService.emptyCartLocal();
  }
}
