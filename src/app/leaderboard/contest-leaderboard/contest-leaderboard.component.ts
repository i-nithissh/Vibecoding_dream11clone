import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-contest-leaderboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './contest-leaderboard.component.html',
  styleUrls: ['./contest-leaderboard.component.css']
})
export class ContestLeaderboardComponent {
  contestId: string = '';
  contest = {
    name: 'Mega Contest',
    matchName: 'MI vs CSK',
    totalParticipants: 1000,
    prizePool: 10000,
    status: 'LIVE'
  };

  leaderboardData = [
    {
      rank: 1,
      username: 'CricketKing',
      teamName: 'Mumbai Warriors',
      points: 485,
      prize: 3000
    },
    {
      rank: 2,
      username: 'Fantasy_Master',
      teamName: 'Chennai Heroes',
      points: 462,
      prize: 2000
    },
    {
      rank: 3,
      username: 'DreamTeam_Pro',
      teamName: 'Power Hitters',
      points: 445,
      prize: 1500
    },
    {
      rank: 4,
      username: 'SportsFan_99',
      teamName: 'Victory Squad',
      points: 438,
      prize: 1000
    },
    {
      rank: 5,
      username: 'CricketLover',
      teamName: 'Strike Force',
      points: 425,
      prize: 800
    },
    {
      rank: 15,
      username: 'You',
      teamName: 'My Dream Team',
      points: 325,
      prize: 100,
      isCurrentUser: true
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.contestId = this.route.snapshot.paramMap.get('contestId') || '1';
  }

  getRankClass(rank: number): string {
    if (rank === 1) return 'gold';
    if (rank === 2) return 'silver';
    if (rank === 3) return 'bronze';
    return '';
  }

  getRankIcon(rank: number): string {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '';
  }

  refreshLeaderboard() {
    // Simulate data refresh
    console.log('Refreshing leaderboard...');
  }
}