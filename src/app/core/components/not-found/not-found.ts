import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bajaj-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="text-center p-5 bg-white rounded-3 border">
    <h2 class="mb-2">404</h2>
    <p class="text-secondary mb-3">The page you’re looking for doesn’t exist.</p>
    <a routerLink="/" class="btn btn-dark">Go Home</a>
  </div>
  `
})
export class NotFoundComponent {}
