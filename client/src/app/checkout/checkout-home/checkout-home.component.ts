import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { OrdersService } from 'src/app/service/orders.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-home',
  templateUrl: './checkout-home.component.html',
  styleUrls: ['./checkout-home.component.css'],
})
export class CheckoutHomeComponent implements OnInit {
  firstFormGroup: FormGroup = this._formBuilder.group({});
  secondFormGroup: FormGroup = this._formBuilder.group({});

  constructor(
    private _formBuilder: FormBuilder,
    private ordersService: OrdersService,
    private cartService: CartService,
    private route: Router,
    private dialog: MatDialog
  ) {}

  // firstFormGroup.get('firstName')?.value
  onPlaceOrder() {
    this.ordersService.addOrders(this.cartService.cart);
    this.cartService.emptyCart();

    const dialogRef = this.dialog.open(DialogComponet);
    setTimeout(() => {
      dialogRef.close();
    }, 1000);

    setTimeout(() => {
      this.route.navigate(['orders']);
    }, 1500);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      locality: ['', Validators.required],
      pincode: ['', Validators.required],
    });
  }
}

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog/dialog.html',
})
export class DialogComponet {}
