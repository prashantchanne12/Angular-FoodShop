import { Food } from './cart.service';

export class CartLocalService {
  addCartItemToLocalStorage(item: Food) {
    const cartItems = localStorage.getItem('cartItems');

    if (!cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([item]));
    } else {
      const parsedCartItem: Food[] = JSON.parse(cartItems);

      parsedCartItem.push(item);

      localStorage.setItem('cartItems', JSON.stringify(parsedCartItem));
    }
  }

  setNewCart(cart: Food[]) {
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
