import { Component, OnInit, Input } from '@angular/core';
import { Food, CartService } from 'src/app/service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FoodService } from 'src/app/service/foods.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() food: Food = {
    quantity: 1,
    id: 0,
    name: '',
    imgUrl: '',
    price: 0,
    desc: '',
    category: [''],
    total: 0,
  };
  @Input() isAdmin: boolean | Subscription = false;

  addedToCart = false;
  quantity = 0;
  foodItem: Food = {
    quantity: 1,
    id: 0,
    name: '',
    imgUrl: '',
    price: 0,
    desc: '',
    category: [''],
    total: 0,
  };
  durationInSeconds = 5;

  constructor(
    private cartService: CartService,
    private foodService: FoodService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  onAddToCart(item: Food) {
    this.addedToCart = true;
    this._snackBar.open(`${this.food.name} added to bag ✅`, '', {
      duration: 3000,
    });

    if (this.quantity === 0) {
      this.quantity += 1;
    }

    const newItem = { ...item, quantity: this.quantity };
    this.cartService.addToCart(newItem);
    this.foodItem = newItem;
  }

  onQuantityAdd() {
    this.quantity += 1;
    this.cartService.addToCart({ ...this.foodItem, quantity: this.quantity });
  }

  onQuantityRemove() {
    this.quantity -= 1;
    if (this.quantity === 0) {
      this.addedToCart = false;
      this.cartService.removeFromCart(this.foodItem);
      return;
    }
    this.cartService.addToCart({ ...this.foodItem, quantity: this.quantity });
  }

  // ------- ADMIN FUNCTION -------
  onDelete() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.foodService.deleteFood(this.food.id).subscribe(() => {
          window.location.reload();
        });
      }
    });
  }

  ngOnInit(): void {}
}
