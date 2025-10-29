// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './shared/components/header/header';
// import { FooterComponent } from './shared/components/footer/footer';
// import { SideNavBarComponent } from './shared/components/side-nav-bar/side-nav-bar';

// @Component({
//   selector: 'bajaj-root',
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent, FooterComponent, SideNavBarComponent],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class AppComponent {}


import { Component, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { SideNavBarComponent } from './shared/components/side-nav-bar/side-nav-bar';
import { ProductListComponent } from './features/products/components/product-list/product-list';

@Component({
  selector: 'bajaj-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SideNavBarComponent, ProductListComponent, ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
   @ViewChild(ProductListComponent) productListComponent!: ProductListComponent;
 
//  onCategorySelected(categoryName: string) {
//     this.productListComponent.onCategorySelected(categoryName);
//   }
 constructor(private router: Router) {} 
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

   onCategorySelected(category: string) {
    console.log('Category clicked:', category);

    // Close sidebar on mobile after selection
    this.closeSidebar();

    // Navigate to the product list page with category as a query param
    this.router.navigate(['/products'], { queryParams: { category } });
  }

  
}
