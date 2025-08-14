import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-contest-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent {
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
      firstPrize: 3000,
      winnerPercentage: 60
    },
    {
      id: 2,
      name: 'Head to Head',
      matchId: 1,
      matchName: 'MI vs CSK',
      entryFee: 100,
      prizePool: 180,
      totalSpots: 2,
      filledSpots: 1,
      firstPrize: 180,
      winnerPercentage: 50
    },
    {
      id: 3,
      name: 'Small League',
      matchId: 2,
      matchName: 'RCB vs DC',
      entryFee: 25,
      prizePool: 500,
      totalSpots: 25,
      filledSpots: 18,
      firstPrize: 150,
      winnerPercentage: 40
    }
  ];

  constructor(private router: Router) {}

  joinContest(contestId: number) {
    this.router.navigate(['/join-contest', contestId]);
  }

  getProgressPercentage(filled: number, total: number): number {
    return (filled / total) * 100;
  }
}