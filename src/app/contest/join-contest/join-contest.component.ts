import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-join-contest',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './join-contest.component.html',
  styleUrls: ['./join-contest.component.css']
})
export class JoinContestComponent {
  contestId: string = '';
  contest = {
    id: 1,
    name: 'Mega Contest',
    matchName: 'MI vs CSK',
    entryFee: 50,
    prizePool: 10000,
    totalSpots: 1000,
    filledSpots: 750,
    firstPrize: 3000,
    winnerPercentage: 60,
    prizeDistribution: [
      { rank: '1st', prize: 3000 },
      { rank: '2nd', prize: 2000 },
      { rank: '3rd', prize: 1500 },
      { rank: '4th-10th', prize: 500 },
      { rank: '11th-100th', prize: 100 }
    ]
  };

  myTeams = [
    {
      id: 1,
      name: 'Team Warriors',
      captain: 'MS Dhoni',
      viceCaptain: 'Rohit Sharma'
    },
    {
      id: 2,
      name: 'Power Hitters',
      captain: 'Virat Kohli',
      viceCaptain: 'AB de Villiers'
    }
  ];

  selectedTeam = this.myTeams[0];
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contestId = this.route.snapshot.paramMap.get('contestId') || '1';
  }

  joinContest() {
    if (!this.selectedTeam) {
      alert('Please select a team');
      return;
    }

    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      alert('Successfully joined the contest!');
      this.router.navigate(['/dashboard']);
    }, 2000);
  }

  createNewTeam() {
    this.router.navigate(['/team-builder', 1]);
  }

  getProgressPercentage(): number {
    return (this.contest.filledSpots / this.contest.totalSpots) * 100;
  }
}