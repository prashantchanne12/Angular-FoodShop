import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/foods.service';
import { Food } from 'src/app/service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-dish-home',
  templateUrl: './add-dish-home.component.html',
  styleUrls: ['./add-dish-home.component.css'],
})
export class AddDishHomeComponent implements OnInit {
  categories = [
    { value: 'Indian', viewValue: 'Indian' },
    { value: 'Mexican', viewValue: 'Mexican' },
    { value: 'Italian', viewValue: 'Italian' },
    { value: 'Continetal', viewValue: 'Continetal' },
    { value: 'Chinese', viewValue: 'Chinese' },
  ];

  name = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);
  price = new FormControl(0, [Validators.required, Validators.min(1)]);
  edit = false;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private _snackBar: MatSnackBar
  ) {}

  onAdd() {
    const food: Food = {
      id: new Date().getTime(),
      name: this.name.value,
      category: [this.category.value],
      desc: this.description.value,
      imgUrl: this.image.value,
      price: this.price.value,
      quantity: 1,
      total: this.price.value,
    };
    this.foodService.addFood(food).subscribe(() => {
      this.showSnakbar(`${this.name.value} added ✅`);
      this.clearForm();
    });
  }

  onEdit() {
    const food: Food = {
      id: this.id,
      name: this.name.value,
      category: [this.category.value],
      desc: this.description.value,
      imgUrl: this.image.value,
      price: this.price.value,
      quantity: 1,
      total: this.price.value,
    };

    this.foodService.editFood(food).subscribe(() => {
      this.showSnakbar(`${this.name.value} edited ✅`);
      this.clearForm();
    });
  }

  showSnakbar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
    });
  }

  clearForm() {
    this.name.reset();
    this.category.reset();
    this.description.reset(), this.image.reset();
    this.price.reset();
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = parseInt(id);

      if (this.id && Number.isInteger(this.id)) {
        this.edit = true;

        this.foodService.getFoodById(this.id).subscribe((food) => {
          this.name.setValue(food.name);
          this.category.setValue(food.category);
          this.description.setValue(food.desc);
          this.price.setValue(food.price);
          this.image.setValue(food.imgUrl);
        });
      }
    }
  }
}
