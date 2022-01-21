import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css'],
})
export class LoginHomeComponent implements OnInit {
  userName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(10),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(10),
  ]);
  error = '';

  constructor(private route: Router) {}

  getErrorMessage() {
    if (this.userName.hasError('required')) {
      return "Username can't be empty";
    }

    if (this.userName.hasError('invalidUserPass')) {
      return 'Invalid username or password';
    }

    return this.userName.hasError('minlength')
      ? 'Minmimum length should be 2'
      : 'Maximum length should be 10';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return "Password can't be empty";
    }

    return this.password.hasError('minlength')
      ? 'Minmimum length should be 2'
      : 'Maximum length should be 10';
  }

  login() {
    if (!this.userName.value || !this.password.value) return;

    const users = localStorage.getItem('food-shop-users') || '';

    if (!users) {
      this.userName.setErrors({ invalidUserPass: true });
      return;
    }

    const parsedUsers: { username: string; password: string }[] =
      JSON.parse(users);

    const user = parsedUsers.find(
      (item) => item.username === this.userName.value
    );

    if (!user) {
      this.userName.setErrors({ invalidUserPass: true });
      return;
    } else {
      if (user.password === this.password.value) {
        localStorage.setItem(
          'current-food-shop-user',
          JSON.stringify({
            username: this.userName.value,
            password: this.password.value,
          })
        );
        console.log('login success!');
        this.route.navigate(['']);
      }
    }
  }

  create() {}

  ngOnInit(): void {}
}
