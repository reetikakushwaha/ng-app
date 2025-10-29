import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:9090/api/products';

  constructor(private http: HttpClient) { }

  // ✅ Fetch all products (with pagination)
  getAllProducts(limit: number = 200, page: number = 1): Observable<{ success: boolean; data: Product[] }> {
    return this.http.get<{ success: boolean; data: Product[] }>(`${this.apiUrl}?limit=${limit}&page=${page}`);
  }

  // ✅ Fetch single product by ID
  getProductById(id: string): Observable<{ success: boolean; data: Product }> {
    return this.http.get<{ success: boolean; data: Product }>(`${this.apiUrl}/${id}`);
  }

  getProductsByCategory(categoryName: string): Observable<{ success: boolean; data: Product[] }> {
  return this.http.get<{ success: boolean; data: Product[] }>(
    `${this.apiUrl}?category=${encodeURIComponent(categoryName)}`
  );
}

}
