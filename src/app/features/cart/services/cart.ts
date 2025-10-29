import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../features/products/models/product.model';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  // ✅ Add or increment item in cart
  addToCart(product: Product): void {
    const existing = this.cartItems.find((item) => item._id === product._id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next([...this.cartItems]);
  }

  // ✅ Increase quantity
  increaseQuantity(id: string): void {
    const item = this.cartItems.find((i) => i._id === id);
    if (item) {
      item.quantity++;
      this.cartItemsSubject.next([...this.cartItems]);
    }
  }

  // ✅ Decrease quantity
  decreaseQuantity(id: string): void {
    const item = this.cartItems.find((i) => i._id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else if (item && item.quantity === 1) {
      this.removeFromCart(id); // auto remove if quantity 0
      return;
    }
    this.cartItemsSubject.next([...this.cartItems]);
  }

  // ✅ Remove product completely
  removeFromCart(id: string): void {
    this.cartItems = this.cartItems.filter((item) => item._id !== id);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  // ✅ Clear cart
  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([]);
  }

  // ✅ Get total
  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
