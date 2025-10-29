import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SliderComponent } from '../../../../shared/components/slider/slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryListComponent } from "../../../categories/components/categories-list/categories-list";
import { CartService } from '../../../cart/services/cart';


@Component({
  selector: 'bajaj-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SliderComponent, NgxPaginationModule, CategoryListComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  allProducts: any[] = [];
  currentCategory: string = '';
  loading = true;
  error: string | null = null;

  page: number = 1;
  itemsPerPage: number = 8;
  errorMessage: string | undefined;


  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      const category = params['category'] || 'Electronics';
      this.fetchProducts(category);
    });
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch products';
        console.error(err);
        this.loading = false;
      },
    });
  }

  filterByCategory(category: any) {
    if (!category) {
      this.products = this.allProducts;
      return;
    }

    this.products = this.allProducts.filter(
      (p) => p.categoryId === category.id || p.category === category.name
    );
  }

  fetchProducts(category: string) {
    this.loading = true;
    this.productService.getProductsByCategory(category).subscribe({
      next: (res) => {
        this.products = res.data || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error(err);
      }
    });

  }
   addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart 🛒`);
   }
}
