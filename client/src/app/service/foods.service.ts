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

  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.apiUrl, food, httpOptions);
  }

  // addNewFood(item: Food) {
  //   this.foods.push(item);
  // }

  deleteFood(id: number) {}

  editFood(id: number, data: string) {}
}
