import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-add-money',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent {
  selectedAmount = 0;
  customAmount = '';
  paymentMethod = 'card';
  isProcessing = false;

  quickAmounts = [50, 100, 200, 500, 1000, 2000];

  constructor(private router: Router) {}

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = '';
  }

  onCustomAmountChange() {
    this.selectedAmount = 0;
  }

  getFinalAmount(): number {
    return this.selectedAmount || parseFloat(this.customAmount) || 0;
  }

  addMoney() {
    const amount = this.getFinalAmount();
    
    if (amount <= 0) {
      alert('Please select or enter a valid amount');
      return;
    }

    if (amount < 10) {
      alert('Minimum amount is ₹10');
      return;
    }

    this.isProcessing = true;
    
    // Simulate payment processing
    setTimeout(() => {
      this.isProcessing = false;
      alert(`Successfully added ₹${amount} to your wallet!`);
      this.router.navigate(['/wallet']);
    }, 3000);
  }
}