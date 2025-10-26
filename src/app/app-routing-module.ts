import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/components/product-list/product-list';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },  // ✅ important
  { path: '**', redirectTo: '' } // fallback (keep last)
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
