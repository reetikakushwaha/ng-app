import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bajaj-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  loading = true;
  error: string | null = null;

  private apiUrl = 'http://localhost:9090/api/products'; // ✅ backend base URL

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); // ✅ get ID from route
    if (productId) {
      this.fetchProduct(productId);
    } else {
      this.error = 'Invalid product ID';
      this.loading = false;
    }
  }

  fetchProduct(id: string): void {
    this.loading = true;
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.product = data.data || data; // ✅ some APIs wrap in { data: ... }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching product:', err);
        this.error = 'Failed to load product details';
        this.loading = false;
      }
    });
  }
}
