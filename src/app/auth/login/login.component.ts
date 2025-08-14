import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  
  errors: any = {};
  isLoading = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.errors = {};
    
    if (!this.loginData.email) {
      this.errors.email = 'Email is required';
    }
    
    if (!this.loginData.password) {
      this.errors.password = 'Password is required';
    }

    if (Object.keys(this.errors).length === 0) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }, 2000);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}