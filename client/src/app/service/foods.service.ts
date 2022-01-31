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

  constructor(private http: HttpClient) {}

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
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
