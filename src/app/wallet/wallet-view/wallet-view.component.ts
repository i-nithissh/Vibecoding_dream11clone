import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-wallet-view',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.css']
})
export class WalletViewComponent {
  walletData = {
    totalBalance: 1250.50,
    winnings: 850.30,
    deposits: 400.20,
    bonus: 0.00
  };

  transactions = [
    {
      id: 1,
      type: 'WIN',
      description: 'Contest Prize - MI vs CSK',
      amount: 150.00,
      date: '2025-01-14 18:30',
      status: 'COMPLETED'
    },
    {
      id: 2,
      type: 'DEPOSIT',
      description: 'Money Added',
      amount: 100.00,
      date: '2025-01-13 10:15',
      status: 'COMPLETED'
    },
    {
      id: 3,
      type: 'ENTRY',
      description: 'Contest Entry - RCB vs DC',
      amount: -50.00,
      date: '2025-01-12 16:45',
      status: 'COMPLETED'
    },
    {
      id: 4,
      type: 'WIN',
      description: 'Contest Prize - KKR vs PBKS',
      amount: 75.00,
      date: '2025-01-11 20:00',
      status: 'COMPLETED'
    }
  ];

  constructor(private router: Router) {}

  addMoney() {
    this.router.navigate(['/add-money']);
  }

  withdrawMoney() {
    this.router.navigate(['/withdraw-money']);
  }

  getTransactionIcon(type: string): string {
    switch (type) {
      case 'WIN': return '🏆';
      case 'DEPOSIT': return '💰';
      case 'ENTRY': return '🎮';
      case 'WITHDRAW': return '📤';
      default: return '💳';
    }
  }

  getTransactionColor(amount: number): string {
    return amount > 0 ? '#28a745' : '#dc3545';
  }
}