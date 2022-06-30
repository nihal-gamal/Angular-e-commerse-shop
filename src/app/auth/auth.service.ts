import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor() {}
  isAuthenticated() {
    return !!localStorage.getItem('token');
    // return this.isLoggedIn;
  }
}
