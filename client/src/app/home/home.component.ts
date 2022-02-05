import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  loading = false;
  sortOptions = [
    { value: 'lowToHigh', viewValue: 'Price - low to high' },
    { value: 'highToLow', viewValue: 'Price - high to low' },
  ];
  sortValue = '';

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

  shuffleArray(array: Food[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  ngOnInit(): void {
    this.loading = true;
    this.foodService.getFoods().subscribe((food) => {
      this.foods = food;
      this.tempFood = this.shuffleArray(food);
      this.loading = false;
    });

    this.userService.getCurrentUser().subscribe((user) => {
      if (user.length > 0 && user[0].isAdmin) {
        this.isAdmin = true;
      }
    });
  }

  compareAsc(a: Food, b: Food) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  compareDsc(a: Food, b: Food) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }

  onChange(event: any) {
    this.sortValue = event.value;

    if (this.sortValue === undefined) {
      this.foods = this.shuffleArray(this.tempFood);
    } else {
      if (this.sortValue === 'lowToHigh') {
        this.foods = this.foods.sort(this.compareAsc);
      } else {
        this.foods = this.foods.sort(this.compareDsc);
      }
    }
  }
}
