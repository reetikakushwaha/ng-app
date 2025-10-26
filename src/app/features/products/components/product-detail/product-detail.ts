import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'bajaj-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent implements OnInit {
  id!: number;
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id') || 0);

    this.product = {
      title: 'Sample Product ' + this.id,
      price: 19999,
      image: 'https://picsum.photos/seed/detail' + this.id + '/900/600',
      desc: 'Crisp description of the product highlighting features, warranty and delivery.'
    };
  }
}
