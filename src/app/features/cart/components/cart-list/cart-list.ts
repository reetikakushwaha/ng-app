import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bajaj-cart-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './cart-list.html',
  styleUrls: ['./cart-list.css']
})
export class CartListComponent {
  items = [
    { id:1, title:'Noise Cancelling Headphones', price:7999, qty:1 },
    { id:2, title:'Mechanical Keyboard', price:4999, qty:2 }
  ];
  get total(){ return this.items.reduce((s,x)=> s + x.price * x.qty, 0); }
}
