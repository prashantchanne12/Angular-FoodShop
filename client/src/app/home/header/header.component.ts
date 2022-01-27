import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUser = false;

  constructor(
    public cartService: CartService,
    public userService: UserService
  ) {
    console.log(userService.getIsAdmin());
  }

  ngOnInit(): void {
    const currentUser = localStorage.getItem('current-food-shop-user');
    if (currentUser) {
      this.isUser = true;
    }
  }

  onLogout() {
    localStorage.removeItem('current-food-shop-user');
    this.isUser = false;
  }
}
