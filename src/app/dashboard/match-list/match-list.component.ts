import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-match-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {
  matches = [
    {
      id: 1,
      team1: 'Mumbai Indians',
      team2: 'Chennai Super Kings',
      team1Logo: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=50',
      team2Logo: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=50',
      date: '2025-01-15 19:30',
      contest: 'IPL 2025',
      status: 'Upcoming',
      contestsCount: 24
    },
    {
      id: 2,
      team1: 'Royal Challengers Bangalore',
      team2: 'Delhi Capitals',
      team1Logo: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=50',
      team2Logo: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=50',
      date: '2025-01-16 15:30',
      contest: 'IPL 2025',
      status: 'Upcoming',
      contestsCount: 18
    },
    {
      id: 3,
      team1: 'Kolkata Knight Riders',
      team2: 'Punjab Kings',
      team1Logo: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=50',
      team2Logo: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=50',
      date: '2025-01-17 19:30',
      contest: 'IPL 2025',
      status: 'Upcoming',
      contestsCount: 32
    }
  ];

  constructor(private router: Router) {}

  createTeam(matchId: number) {
    this.router.navigate(['/team-builder', matchId]);
  }

  viewContests(matchId: number) {
    this.router.navigate(['/contests'], { queryParams: { matchId } });
  }
}