import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'bajaj-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // ✅ Basic form validation
    if (!this.email || !this.password) {
      this.error = 'Please enter both email and password.';
      return;
    }

    this.loading = true;
    this.error = null;

    // ✅ API call to login
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.loading = false;

        // ✅ Store token & user (handled in AuthService)
        // ✅ Redirect to Home
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Invalid email or password.';
        console.error('Login failed:', err);
      }
    });
  }
}
