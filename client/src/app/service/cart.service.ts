import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Food[] = [];
  private apiUrl = 'http://localhost:5000/cart';
  cartItemCount = 0;

  constructor(private http: HttpClient) {
    this.getCart().subscribe((cart) => {
      this.cartItemCount = cart.length;
    });
  }

  addToCart(item: Food) {
    this.getCartItem(item.id).subscribe((food) => {
      if (food.length === 1) {
        // update quantity & total

        const currentFood: Food = food[0];

        currentFood.quantity = item.quantity;
        currentFood.total = item.quantity * item.price;

        const url = `${this.apiUrl}/${currentFood.id}`;
        this.http.put<Food>(url, currentFood, httpOptions).subscribe();
      } else {
        // push to the cart
        this.http
          .post<Food>(this.apiUrl, item, httpOptions)
          .subscribe(() => (this.cartItemCount += 1));
      }
    });
  }

  getCartItem(id: number): Observable<Food[]> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<Food[]>(url);
  }

  removeFromCart(item: Food): Observable<Food> {
    const url = `${this.apiUrl}/${item.id}`;
    this.cartItemCount -= 1;
    return this.http.delete<Food>(url);
  }

  getCart(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }

  emptyCart() {
    this.cartItemCount = 0;
    this.http.get<Food[]>(this.apiUrl).subscribe((foods) => {
      foods.forEach((food) => {
        const url = `${this.apiUrl}/${food.id}`;
        this.http.delete<Food>(url).subscribe();
      });
    });
  }
}
