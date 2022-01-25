import { Injectable } from '@angular/core';
import { CartLocalService } from './cart.local.service';

export interface CartItem {
  id: number;
  name: string;
  imgUrl: string;
  desc: string;
  price: number;
  quantity: number;
  category: string[];
}

@Injectable()
export class CartService {
  constructor(private cartLocalService: CartLocalService) {
    if (cartLocalService.getCartItemsFromLocalStorage()) {
      this.cart = cartLocalService.getCartItemsFromLocalStorage();
    }
  }

  cart: CartItem[] = [];
  addedToCart = false;

  addToCart(item: CartItem) {
    this.addedToCart = true;

    const index = this.cart.findIndex((c) => c.id === item.id);

    if (index === -1) {
      this.cart.push(item);
      this.cartLocalService.addCartItemToLocalStorage(item);
    } else {
      this.cart[index].quantity = item.quantity;
      this.cartLocalService.setNewCart(this.cart);
    }

    setTimeout(() => {
      this.addedToCart = false;
    }, 1000);
  }

  removeFromCart(item: CartItem) {
    this.cart = this.cart.filter((c) => c.id !== item.id);
    this.cartLocalService.setNewCart(this.cart);
  }

  getCartCount(): number {
    return this.cart.length;
  }
}
