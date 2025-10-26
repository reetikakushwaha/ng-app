import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

export type ProductCardModel = {
  id:number; title:string; price:number; image:string; rating:number;
  subtitle?:string;
};

@Component({
  selector: 'bajaj-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: ProductCardModel;
}
