import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';
import { SideNavBarComponent } from '../../../../shared/components/side-nav-bar/side-nav-bar';

@Component({
  selector: 'bajaj-product-detail',
  standalone: true,
  imports: [CommonModule, SideNavBarComponent],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  loading = true;
  error: string | null = null;
  starsArray: string[] = [];
  selectedImage: string | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (res) => {
          this.product = res.data; // ✅ Now TypeScript knows 'data' exists
          this.generateStars(this.product.rating);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.error = 'Failed to load product details';
          this.loading = false;
        }
      });
    }
  }

  generateStars(rating: number): void {
    this.starsArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) this.starsArray.push('full');
    if (hasHalfStar) this.starsArray.push('half');
    while (this.starsArray.length < 5) this.starsArray.push('empty');
  }

  
}
