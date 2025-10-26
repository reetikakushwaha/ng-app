// import { Component, EventEmitter, Output, Input } from '@angular/core';
// import { Router, RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'bajaj-header',
//   standalone: true,
//   imports: [CommonModule, RouterLink, FormsModule],
//   templateUrl: './header.html',
//   styleUrls: ['./header.css']
// })
// export class HeaderComponent {
//   query = '';
//   @Output() search = new EventEmitter<string>();
//   constructor(private router: Router){}

//   onSubmit(){
//     this.search.emit(this.query.trim());
//     // For now just route to home; your product list will pick up query later
//     this.router.navigateByUrl('/');
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bajaj-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  query = '';

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuToggle.emit();
  }

  onSubmit() {
    this.router.navigateByUrl('/');
  }
}
