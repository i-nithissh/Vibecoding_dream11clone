import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  activeTab = 'profile';
  
  profileData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1990-05-15',
    city: 'Mumbai',
    state: 'Maharashtra'
  };

  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  stats = {
    totalContests: 45,
    contestsWon: 12,
    totalEarnings: 2450.50,
    currentRank: 2156
  };

  errors: any = {};
  isLoading = false;

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.errors = {};
  }

  updateProfile() {
    this.errors = {};
    
    if (!this.profileData.firstName) {
      this.errors.firstName = 'First name is required';
    }
    
    if (!this.profileData.lastName) {
      this.errors.lastName = 'Last name is required';
    }
    
    if (!this.profileData.email) {
      this.errors.email = 'Email is required';
    }

    if (Object.keys(this.errors).length === 0) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        alert('Profile updated successfully!');
      }, 2000);
    }
  }

  changePassword() {
    this.errors = {};
    
    if (!this.passwordData.currentPassword) {
      this.errors.currentPassword = 'Current password is required';
    }
    
    if (!this.passwordData.newPassword) {
      this.errors.newPassword = 'New password is required';
    } else if (this.passwordData.newPassword.length < 6) {
      this.errors.newPassword = 'Password must be at least 6 characters';
    }
    
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      this.errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(this.errors).length === 0) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.passwordData = {
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        };
        alert('Password changed successfully!');
      }, 2000);
    }
  }
}