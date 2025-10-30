import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // Import RouterLink
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'bajaj-register',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink // Add RouterLink for the template
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  // Updated to include all fields from your User model
  name = '';
  email = '';
  password = '';
  phone = ''; // New field
  role = 'customer'; // New field, defaults to customer

  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Basic validation
    if (!this.name || !this.email || !this.password) {
      this.error = 'Please fill in name, email, and password.';
      return;
    }

    this.loading = true;
    this.error = null;

    this.http.post('http://localhost:9090/api/auth/register', {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone, // Send the phone number
      role: this.role   // Send the selected role
    }).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (res: any) => {
        console.log('User registered:', res);
        // On success, send them to the login page
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error = err.error?.error || err.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
}
