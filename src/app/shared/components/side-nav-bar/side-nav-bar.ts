import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() categorySelected = new EventEmitter<string>();

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
  onCategoryClick(category: string, event?: Event) {
    if (event) event.preventDefault();
    this.active = category;
    this.categorySelected.emit(category); // send selected category to parent
  }
}
