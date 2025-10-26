import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bajaj-side-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav-bar.html',
  styleUrls: ['./side-nav-bar.css']
})
export class SideNavBarComponent {
  categories = ['Mobiles', 'Laptops', 'Headphones', 'Appliances', 'Cameras', 'Gaming'];
  active = 'Mobiles';
}
