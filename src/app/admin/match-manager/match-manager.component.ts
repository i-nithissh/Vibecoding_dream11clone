import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-match-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './match-manager.component.html',
  styleUrls: ['./match-manager.component.css']
})
export class MatchManagerComponent {
  matches = [
    {
      id: 1,
      team1: 'Mumbai Indians',
      team2: 'Chennai Super Kings',
      date: '2025-01-15T19:30',
      venue: 'Wankhede Stadium',
      status: 'UPCOMING'
    },
    {
      id: 2,
      team1: 'Royal Challengers Bangalore',
      team2: 'Delhi Capitals',
      date: '2025-01-16T15:30',
      venue: 'M Chinnaswamy Stadium',
      status: 'UPCOMING'
    }
  ];

  newMatch = {
    team1: '',
    team2: '',
    date: '',
    venue: '',
    status: 'UPCOMING'
  };

  editingMatch: any = null;
  showAddForm = false;

  teams = [
    'Mumbai Indians',
    'Chennai Super Kings',
    'Royal Challengers Bangalore',
    'Delhi Capitals',
    'Kolkata Knight Riders',
    'Punjab Kings',
    'Rajasthan Royals',
    'Sunrisers Hyderabad'
  ];

  addMatch() {
    if (!this.newMatch.team1 || !this.newMatch.team2 || !this.newMatch.date || !this.newMatch.venue) {
      alert('Please fill all fields');
      return;
    }

    const match = {
      id: Date.now(),
      ...this.newMatch
    };

    this.matches.push(match);
    this.resetForm();
    this.showAddForm = false;
    alert('Match added successfully!');
  }

  editMatch(match: any) {
    this.editingMatch = { ...match };
  }

  updateMatch() {
    const index = this.matches.findIndex(m => m.id === this.editingMatch.id);
    if (index !== -1) {
      this.matches[index] = { ...this.editingMatch };
      this.editingMatch = null;
      alert('Match updated successfully!');
    }
  }

  deleteMatch(matchId: number) {
    if (confirm('Are you sure you want to delete this match?')) {
      this.matches = this.matches.filter(m => m.id !== matchId);
      alert('Match deleted successfully!');
    }
  }

  resetForm() {
    this.newMatch = {
      team1: '',
      team2: '',
      date: '',
      venue: '',
      status: 'UPCOMING'
    };
  }

  cancelEdit() {
    this.editingMatch = null;
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }
}