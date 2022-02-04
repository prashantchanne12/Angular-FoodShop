import { Component, OnInit } from '@angular/core';
import { Food } from '../service/cart.service';
import { FoodService } from '../service/foods.service';
import { SearchService } from '../service/search.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  tempFood: Food[] = [];
  isAdmin = false;
  searchTerm = '';

  imagesForSlider = [
    { path: 'assets/food-1.jpg' },
    { path: 'assets/food-2.jpg' },
    { path: 'assets/food-3.jpg' },
  ];

  constructor(
    public foodService: FoodService,
    public userService: UserService,
    private searchService: SearchService
  ) {
    searchService.searchTerm.subscribe((term: string) => {
      console.log('Term', term);
      this.foods = this.tempFood.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    });
  }

  onSearch() {
    console.log('hello world');
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe((food) => {
      this.foods = food;
      this.tempFood = food;
    });

    this.userService.getCurrentUser().subscribe((user) => {
      if (user.length > 0 && user[0].isAdmin) {
        this.isAdmin = true;
      }
    });
  }
}
