import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  upcomingMatches = [
    {
      id: 1,
      team1: 'Mumbai Indians',
      team2: 'Chennai Super Kings',
      date: '2025-01-15 19:30',
      contest: 'IPL 2025'
    },
    {
      id: 2,
      team1: 'Royal Challengers Bangalore',
      team2: 'Delhi Capitals',
      date: '2025-01-16 15:30',
      contest: 'IPL 2025'
    }
  ];

  myTeams = [
    {
      id: 1,
      matchId: 1,
      teamName: 'My Team 1',
      captain: 'MS Dhoni',
      viceCaptain: 'Rohit Sharma',
      points: 245
    }
  ];

  constructor(private router: Router) {}

  createTeam(matchId: number) {
    this.router.navigate(['/team-builder', matchId]);
  }

  viewContests() {
    this.router.navigate(['/contests']);
  }
}