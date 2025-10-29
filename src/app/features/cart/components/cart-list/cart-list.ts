import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bajaj-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-list.html',
  styleUrls: ['./cart-list.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  increase(itemId: string) {
    this.cartService.increaseQuantity(itemId);
  }

  decrease(itemId: string) {
    this.cartService.decreaseQuantity(itemId);
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
  
}
