import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bajaj-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {

  currentYear = new Date().getFullYear();
}
