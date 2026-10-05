import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'isLoggedIn';
  readonly email = 'admin@gmail.com';
  readonly password = 'admin1234';

  isAuthenticated(): boolean {
    return typeof localStorage !== 'undefined' && localStorage.getItem(this.storageKey) === 'true';
  }

  login(email: string, password: string): { emailError: boolean; passwordError: boolean } {
    const result = {
      emailError: email.trim().toLowerCase() !== this.email,
      passwordError: password !== this.password,
    };

    if (!result.emailError && !result.passwordError && typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, 'true');
    }

    return result;
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.storageKey);
    }
  }
}