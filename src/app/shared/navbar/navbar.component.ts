import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = true; // This should be managed by auth service
  userBalance = 1250.50;

  constructor(private router: Router) {}

  logout() {
    // Implement logout logic
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}