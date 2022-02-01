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
  isUserAdmin = false;
  userId: number = 1111;

  constructor(
    public cartService: CartService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      if (user.length > 0) {
        this.isUser = true;
        if (user[0].isAdmin) {
          this.isUserAdmin = true;
        }
        this.userId = user[0].id;
      }
    });
  }

  onLogout() {
    this.userService.logout(this.userId).subscribe(() => {
      this.cartService.emptyCart();
      window.location.reload();
      this.isUser = false;
      this.isUserAdmin = false;
    });
  }
}
