import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bajaj-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class SliderComponent {
  images = [
    'https://picsum.photos/seed/hero1/1200/400',
    'https://picsum.photos/seed/hero2/1200/400',
    'https://picsum.photos/seed/hero3/1200/400'
  ];
}
