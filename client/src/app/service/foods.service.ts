import { Injectable } from '@angular/core';
import { Food } from './cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private apiUrl = 'http://localhost:5000/foods';
  private param = '';

  constructor(private http: HttpClient) {}

  searchFood(search: string) {
    this.param = search;
  }

  getFoods(): Observable<Food[]> {
    // return this.http.get<Food[]>(this.apiUrl);
    const url = `${this.apiUrl}?q=${this.param}`;
    return this.http.get<Food[]>(url);
  }

  getFoodsBySearch(param: string): Observable<Food[]> {
    const url = `${this.apiUrl}?q=${param}`;
    return this.http.get<Food[]>(url);
  }

  // -------- ADMIN FUNCTIONS ----------
  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.apiUrl, food, httpOptions);
  }

  deleteFood(id: number): Observable<Food> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Food>(url);
  }

  getFoodById(id: number): Observable<Food> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Food>(url);
  }

  editFood(food: Food) {
    const url = `${this.apiUrl}/${food.id}`;
    return this.http.put<Food>(url, food, httpOptions);
  }
}
