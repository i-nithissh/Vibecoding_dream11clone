import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };
  
  errors: any = {};
  isLoading = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.errors = {};
    
    if (!this.registerData.firstName) {
      this.errors.firstName = 'First name is required';
    }
    
    if (!this.registerData.lastName) {
      this.errors.lastName = 'Last name is required';
    }
    
    if (!this.registerData.email) {
      this.errors.email = 'Email is required';
    }
    
    if (!this.registerData.phone) {
      this.errors.phone = 'Phone number is required';
    }
    
    if (!this.registerData.password) {
      this.errors.password = 'Password is required';
    }
    
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(this.errors).length === 0) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/otp']);
      }, 2000);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}