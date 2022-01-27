import { Component, OnInit } from '@angular/core';
import { CartItem } from '../service/cart.service';
import { FoodService } from '../service/foods.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: CartItem[];

  imagesForSlider = [
    { path: 'assets/food-1.jpg' },
    { path: 'assets/food-2.jpg' },
    { path: 'assets/food-3.jpg' },
  ];

  constructor(
    private foodService: FoodService,
    public userService: UserService
  ) {
    this.foods = foodService.foods;
  }

  ngOnInit(): void {}
}
