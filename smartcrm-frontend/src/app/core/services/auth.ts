import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly USER_KEY = 'smartcrm_user';

  register(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const storedUser = localStorage.getItem(this.USER_KEY);

    if (!storedUser) {
      return false;
    }

    const user = JSON.parse(storedUser);

    return user.email === email;
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem(this.USER_KEY);

    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }
}
