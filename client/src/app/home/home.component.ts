import { Component, OnInit } from '@angular/core';
import { Food } from '../service/cart.service';
import { FoodService } from '../service/foods.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  isAdmin = false;

  imagesForSlider = [
    { path: 'assets/food-1.jpg' },
    { path: 'assets/food-2.jpg' },
    { path: 'assets/food-3.jpg' },
  ];

  constructor(
    private foodService: FoodService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.foodService.getFoods().subscribe((food) => {
      this.foods = food;
    });

    this.userService.getCurrentUser().subscribe((user) => {
      if (user.length > 0 && user[0].isAdmin) {
        this.isAdmin = true;
      }
    });
  }
}
