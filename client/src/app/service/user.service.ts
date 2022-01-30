import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export interface User {
  id: number;
  username: string;
  password: string;
  isAdmin: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5000/users';
  private currentUser = 'http://localhost:5000/curentUser';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(this.currentUser, user, httpOptions);
  }

  logout(): Observable<User> {
    return this.http.delete<User>(this.currentUser);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.currentUser);
  }

  getUserWithUsername(username: string) {
    const url = `${this.apiUrl}?username=${username}`;
    return this.http.get<User[]>(url);
  }

  getUsernameWithPassword(username: string, password: string) {
    const url = `${this.apiUrl}?username=${username}&password=${password}`;
    return this.http.get<User[]>(url);
  }

  getIsAdmin() {
    if (!this.getCurrentUser()) {
      return false;
    }
    return true;
  }
}
