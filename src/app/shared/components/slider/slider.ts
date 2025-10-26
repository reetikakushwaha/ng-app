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
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80', // Fashion accessories
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1500&q=80', // Electronics sale
  ];

}
