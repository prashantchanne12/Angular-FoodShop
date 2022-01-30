import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/foods.service';

@Component({
  selector: 'app-edit-dish-home',
  templateUrl: './edit-dish-home.component.html',
  styleUrls: ['./edit-dish-home.component.css'],
})
export class EditDishHomeComponent implements OnInit {
  id = 0;
  food: Food = {
    id: 0,
    category: [''],
    desc: '',
    name: '',
    quantity: 0,
    price: 0,
    total: 0,
    imgUrl: '',
  };
  notFound = false;

  constructor(private route: ActivatedRoute, public foodService: FoodService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = parseInt(id);

      // const item = this.foodService.foods.find((food) => food.id === this.id);
      // if (item) {
      //   this.food = item;
      //   console.log(this.food);
      // } else {
      //   this.notFound = true;
      //   return;
      // }
    }
  }
}
