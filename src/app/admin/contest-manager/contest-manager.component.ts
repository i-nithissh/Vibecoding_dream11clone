import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-contest-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './contest-manager.component.html',
  styleUrls: ['./contest-manager.component.css']
})
export class ContestManagerComponent {
  contests = [
    {
      id: 1,
      name: 'Mega Contest',
      matchId: 1,
      matchName: 'MI vs CSK',
      entryFee: 50,
      prizePool: 10000,
      totalSpots: 1000,
      filledSpots: 750,
      status: 'ACTIVE'
    },
    {
      id: 2,
      name: 'Small League',
      matchId: 2,
      matchName: 'RCB vs DC',
      entryFee: 25,
      prizePool: 500,
      totalSpots: 25,
      filledSpots: 18,
      status: 'ACTIVE'
    }
  ];

  newContest = {
    name: '',
    matchId: '',
    entryFee: 0,
    totalSpots: 0,
    prizePool: 0
  };

  matches = [
    { id: 1, name: 'MI vs CSK' },
    { id: 2, name: 'RCB vs DC' },
    { id: 3, name: 'KKR vs PBKS' }
  ];

  editingContest: any = null;
  showAddForm = false;

  addContest() {
    if (!this.newContest.name || !this.newContest.matchId || this.newContest.entryFee <= 0) {
      alert('Please fill all required fields');
      return;
    }

    const selectedMatch = this.matches.find(m => m.id == this.newContest.matchId);
    
    const contest = {
      id: Date.now(),
      ...this.newContest,
      matchName: selectedMatch?.name || '',
      filledSpots: 0,
      status: 'ACTIVE'
    };

    this.contests.push(contest);
    this.resetForm();
    this.showAddForm = false;
    alert('Contest created successfully!');
  }

  editContest(contest: any) {
    this.editingContest = { ...contest };
  }

  updateContest() {
    const index = this.contests.findIndex(c => c.id === this.editingContest.id);
    if (index !== -1) {
      this.contests[index] = { ...this.editingContest };
      this.editingContest = null;
      alert('Contest updated successfully!');
    }
  }

  deleteContest(contestId: number) {
    if (confirm('Are you sure you want to delete this contest?')) {
      this.contests = this.contests.filter(c => c.id !== contestId);
      alert('Contest deleted successfully!');
    }
  }

  resetForm() {
    this.newContest = {
      name: '',
      matchId: '',
      entryFee: 0,
      totalSpots: 0,
      prizePool: 0
    };
  }

  cancelEdit() {
    this.editingContest = null;
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  getProgressPercentage(filled: number, total: number): number {
    return Math.round((filled / total) * 100);
  }
}