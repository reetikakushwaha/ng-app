// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './shared/components/header/header';
// import { FooterComponent } from './shared/components/footer/footer';
// import { SideNavBarComponent } from './shared/components/side-nav-bar/side-nav-bar';

// @Component({
//   selector: 'bajaj-root',
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent, FooterComponent, SideNavBarComponent],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class AppComponent {}


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { SideNavBarComponent } from './shared/components/side-nav-bar/side-nav-bar';

@Component({
  selector: 'bajaj-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SideNavBarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
