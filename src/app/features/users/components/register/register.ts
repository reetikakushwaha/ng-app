import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bajaj-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.error = null;

    this.http.post('http://localhost:9090/api/auth/register', {
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        console.log('User registered:', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
}
