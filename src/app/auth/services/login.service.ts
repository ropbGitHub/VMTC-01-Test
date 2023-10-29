import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private tokenKey = 'VIAMATICA';
  private isLoggedIn = false;

  constructor() {}

  login(usuario: string, password: string): boolean {
    if (usuario === 'admin' && password === 'admin') {
      localStorage.setItem(this.tokenKey, 'renan2023');
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn = false;
  }

  get loggedIn(): boolean {
    return this.isLoggedIn;
  }
}
