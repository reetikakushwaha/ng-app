import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './categories-list.html',
})
export class CategoryListComponent {
  @Input() categories: any[] = [];
  @Output() categorySelected = new EventEmitter<any>();

  activeCategory: any = null;

  onCategoryClick(category: any) {
    this.activeCategory = category;
    this.categorySelected.emit(category); // send the clicked category to parent
  }
}
