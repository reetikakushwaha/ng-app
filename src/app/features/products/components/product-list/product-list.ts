import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../../../shared/components/slider/slider';
import { ProductCardComponent, ProductCardModel } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'bajaj-product-list',
  standalone: true,
  imports: [CommonModule, SliderComponent, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: ProductCardModel[] = [
    { id:1, title:'Noise Cancelling Headphones', subtitle:'Over-ear • Bluetooth 5.3', price:7999, image:'https://picsum.photos/seed/p1/600/450', rating:4.5 },
    { id:2, title:'Gaming Laptop 15"', subtitle:'RTX • 16GB • 512GB', price:69999, image:'https://picsum.photos/seed/p2/600/450', rating:4.6 },
    { id:3, title:'Mirrorless Camera', subtitle:'24MP • 4K', price:54999, image:'https://picsum.photos/seed/p3/600/450', rating:4.4 },
    { id:4, title:'Smartphone Pro', subtitle:'128GB • AMOLED', price:49999, image:'https://picsum.photos/seed/p4/600/450', rating:4.7 },
    { id:5, title:'Mechanical Keyboard', subtitle:'Hot-swap • RGB', price:4999, image:'https://picsum.photos/seed/p5/600/450', rating:4.2 },
    { id:6, title:'4K Smart TV 55"', subtitle:'Dolby Vision', price:42999, image:'https://picsum.photos/seed/p6/600/450', rating:4.3 },
    { id:7, title:'Smartwatch', subtitle:'AMOLED • GPS', price:9999, image:'https://picsum.photos/seed/p7/600/450', rating:4.1 },
    { id:8, title:'Portable Speaker', subtitle:'IP67 • 20h', price:3499, image:'https://picsum.photos/seed/p8/600/450', rating:4.0 },
  ];
}
