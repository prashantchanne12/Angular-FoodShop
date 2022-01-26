import { CartItem } from './cart.service';

export class CartLocalService {
  addCartItemToLocalStorage(item: CartItem) {
    const cartItems = localStorage.getItem('cartItems');

    if (!cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([item]));
    } else {
      const parsedCartItem: CartItem[] = JSON.parse(cartItems);

      parsedCartItem.push(item);

      localStorage.setItem('cartItems', JSON.stringify(parsedCartItem));
    }
  }

  setNewCart(cart: CartItem[]) {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }

  getCartItemsFromLocalStorage() {
    const cartItems = localStorage.getItem('cartItems');

    if (cartItems) {
      return JSON.parse(cartItems);
    }
    return null;
  }

  emptyCartLocal() {
    localStorage.removeItem('cartItems');
  }
}
