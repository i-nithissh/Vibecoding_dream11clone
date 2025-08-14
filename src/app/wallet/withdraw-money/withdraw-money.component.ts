import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-withdraw-money',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './withdraw-money.component.html',
  styleUrls: ['./withdraw-money.component.css']
})
export class WithdrawMoneyComponent {
  withdrawalData = {
    amount: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: ''
  };

  walletBalance = 850.30; // Only winnings can be withdrawn
  errors: any = {};
  isProcessing = false;

  constructor(private router: Router) {}

  validateForm(): boolean {
    this.errors = {};
    
    if (!this.withdrawalData.amount) {
      this.errors.amount = 'Amount is required';
    } else if (parseFloat(this.withdrawalData.amount) <= 0) {
      this.errors.amount = 'Amount must be greater than 0';
    } else if (parseFloat(this.withdrawalData.amount) < 50) {
      this.errors.amount = 'Minimum withdrawal amount is ₹50';
    } else if (parseFloat(this.withdrawalData.amount) > this.walletBalance) {
      this.errors.amount = 'Amount exceeds available balance';
    }

    if (!this.withdrawalData.accountNumber) {
      this.errors.accountNumber = 'Account number is required';
    } else if (this.withdrawalData.accountNumber.length < 9) {
      this.errors.accountNumber = 'Invalid account number';
    }

    if (!this.withdrawalData.ifscCode) {
      this.errors.ifscCode = 'IFSC code is required';
    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(this.withdrawalData.ifscCode)) {
      this.errors.ifscCode = 'Invalid IFSC code format';
    }

    if (!this.withdrawalData.accountHolderName) {
      this.errors.accountHolderName = 'Account holder name is required';
    }

    return Object.keys(this.errors).length === 0;
  }

  requestWithdrawal() {
    if (!this.validateForm()) {
      return;
    }

    this.isProcessing = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isProcessing = false;
      alert(`Withdrawal request for ₹${this.withdrawalData.amount} has been submitted successfully!`);
      this.router.navigate(['/wallet']);
    }, 3000);
  }
}