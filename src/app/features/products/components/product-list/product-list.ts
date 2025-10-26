import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { SliderComponent } from '../../../../shared/components/slider/slider';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'bajaj-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SliderComponent, NgxPaginationModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error: string | null = null;

  page: number = 1;
  itemsPerPage: number = 4;

  constructor(private productService: ProductService) { }

  ngOnInit() {
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
}
