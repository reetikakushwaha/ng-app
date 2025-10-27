import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ makes it available globally for injection
})
export class AuthService {
  private readonly BASE_URL = 'http://localhost:9090/api/auth';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  constructor(private http: HttpClient) {}

  // ✅ Login API
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/login`, { email, password }).pipe(
      tap((res) => {
        if (res?.token) {
          localStorage.setItem(this.TOKEN_KEY, res.token);
          localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
        }
      })
    );
  }

  // ✅ Register API
  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/register`, { name, email, password }).pipe(
      tap((res) => {
        if (res?.token) {
          localStorage.setItem(this.TOKEN_KEY, res.token);
          localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
