import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:9090/api/products'; // your backend API

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<{ success: boolean; total: number; data: Product[] }> {
    return this.http.get<{ success: boolean; total: number; data: Product[] }>(this.baseUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
