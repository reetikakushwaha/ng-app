import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NotFoundComponent } from './core/components/not-found/not-found';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/products/components/product-list/product-list').then(m => m.ProductListComponent) },
  // { path: 'products/:id', loadComponent: () => import('./features/products/components/product-detail/product-detail').then(m => m.ProductDetailComponent) },
  { path: 'cart', loadComponent: () => import('./features/cart/components/cart-list/cart-list').then(m => m.CartListComponent) },
  { path: 'login', loadComponent: () => import('./features/users/components/login/login').then(m => m.Login) },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/products/components/product-detail/product-detail').then(
        (m) => m.ProductDetailComponent
      ),
  },
  { path: '**', component: NotFoundComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
