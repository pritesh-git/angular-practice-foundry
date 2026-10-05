import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  emailError = '';
  passwordError = '';

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  submit(form: NgForm): void {
    this.emailError = '';
    this.passwordError = '';
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const result = this.auth.login(this.credentials.email, this.credentials.password);
    this.emailError = result.emailError ? 'That email does not match our demo account.' : '';
    this.passwordError = result.passwordError ? 'That password is not correct.' : '';
    if (!result.emailError && !result.passwordError) {
      void this.router.navigate(['/dashboard']);
    }
  }
}