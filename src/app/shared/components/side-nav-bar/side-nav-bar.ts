import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bajaj-side-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav-bar.html',
  styleUrls: ['./side-nav-bar.css']
})
export class SideNavBarComponent {
  // Updated e-commerce categories
  categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Sports & Fitness',
    'Beauty & Health',
    'Books & Stationery',
    'Toys & Baby',
    'Groceries',
    'Automotive',
    'Jewellery'
  ];

  active = this.categories[0]; // Default active category

  setActive(category: string) {
    this.active = category;
  }
}
