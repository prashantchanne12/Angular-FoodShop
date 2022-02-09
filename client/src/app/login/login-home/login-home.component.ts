import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/service/user.service';

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
  users: User[] = [];

  constructor(private route: Router, private userService: UserService) {}

  getErrorMessage() {
    if (this.userName.hasError('required')) {
      return "Username can't be empty";
    }

    if (this.userName.hasError('invalidUserPass')) {
      return 'Invalid username or password';
    }
    if (this.userName.hasError('usernameExist')) {
      return 'Username already taken';
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

    if (this.checkAdminLogin()) {
      const user = {
        id: 0,
        username: 'admin',
        password: 'admin',
        isAdmin: 1,
      };
      this.userService.login(user).subscribe(() => {
        this.route.navigate(['']);
      });
    } else {
      this.userService
        .getUsernameWithPassword(this.userName.value, this.password.value)
        .subscribe((user) => {
          if (user.length === 1) {
            this.userService.login(user[0]).subscribe(() => {
              this.route.navigate(['']);
            });
          } else {
            this.userName.setErrors({ invalidUserPass: true });
          }
        });
    }
  }

  create() {
    if (!this.userName.value || !this.password.value) return;

    this.userService
      .getUserWithUsername(this.userName.value)
      .subscribe((user) => {
        if (user.length > 0) {
          this.userName.setErrors({ usernameExist: true });
          return;
        } else {
          // create new user & login
          const user: User = {
            id: new Date().getTime(),
            username: this.userName.value,
            password: this.password.value,
            isAdmin: 0,
          };
          this.userService.addUser(user).subscribe(() => {
            this.userService.login(user).subscribe(() => {
              this.route.navigate(['']);
            });
          });
        }
      });
  }

  checkAdminLogin(): boolean {
    if (this.userName.value === 'admin' && this.password.value === 'admin') {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      if (user.length > 0) {
        this.route.navigate(['']);
      }
    });
  }
}
