import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

interface Player {
  id: number;
  name: string;
  team: string;
  role: string;
  points: number;
  credits: number;
  selected: boolean;
  isCaptain: boolean;
  isViceCaptain: boolean;
}

@Component({
  selector: 'app-team-builder',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css']
})
export class TeamBuilderComponent {
  matchId: string = '';
  selectedPlayers: Player[] = [];
  totalCredits = 100;
  usedCredits = 0;
  captain?: Player;
  viceCaptain?: Player;
  activeTab = 'WK';

  players: Player[] = [
    { id: 1, name: 'MS Dhoni', team: 'CSK', role: 'WK', points: 120, credits: 10.5, selected: false, isCaptain: false, isViceCaptain: false },
    { id: 2, name: 'Ishan Kishan', team: 'MI', role: 'WK', points: 89, credits: 8.5, selected: false, isCaptain: false, isViceCaptain: false },
    { id: 3, name: 'Rohit Sharma', team: 'MI', role: 'BAT', points: 145, credits: 11, selected: false, isCaptain: false, isViceCaptain: false },
    { id: 4, name: 'Virat Kohli', team: 'RCB', role: 'BAT', points: 160, credits: 12, selected: false, isCaptain: false, isViceCaptain: false },
    { id: 5, name: 'Ravindra Jadeja', team: 'CSK', role: 'ALL', points: 135, credits: 9.5, selected: false, isCaptain: false, isViceCaptain: false },
    { id: 6, name: 'Hardik Pandya', team: 'MI', role: 'ALL', points: 125, credits: 9, selected: false, isCaptain: false, isViceCaptain: false },
    { id: 7, name: 'Jasprit Bumrah', team: 'MI', role: 'BOWL', points: 110, credits: 9.5, selected: false, isCaptain: false, isViceCaptain: false },
    { id: 8, name: 'Deepak Chahar', team: 'CSK', role: 'BOWL', points: 95, credits: 8, selected: false, isCaptain: false, isViceCaptain: false }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.matchId = this.route.snapshot.paramMap.get('matchId') || '1';
  }

  getPlayersByRole(role: string): Player[] {
    return this.players.filter(player => player.role === role);
  }

  togglePlayer(player: Player) {
    if (player.selected) {
      this.deselectPlayer(player);
    } else {
      this.selectPlayer(player);
    }
  }

  selectPlayer(player: Player) {
    if (this.selectedPlayers.length >= 11) {
      alert('You can select maximum 11 players');
      return;
    }

    if (this.usedCredits + player.credits > this.totalCredits) {
      alert('Not enough credits to select this player');
      return;
    }

    player.selected = true;
    this.selectedPlayers.push(player);
    this.usedCredits += player.credits;
  }

  deselectPlayer(player: Player) {
    player.selected = false;
    player.isCaptain = false;
    player.isViceCaptain = false;
    
    if (this.captain === player) this.captain = undefined;
    if (this.viceCaptain === player) this.viceCaptain = undefined;
    
    this.selectedPlayers = this.selectedPlayers.filter(p => p.id !== player.id);
    this.usedCredits -= player.credits;
  }

  setCaptain(player: Player) {
    if (this.captain) {
      this.captain.isCaptain = false;
    }
    this.captain = player;
    player.isCaptain = true;
  }

  setViceCaptain(player: Player) {
    if (this.viceCaptain) {
      this.viceCaptain.isViceCaptain = false;
    }
    this.viceCaptain = player;
    player.isViceCaptain = true;
  }

  saveTeam() {
    if (this.selectedPlayers.length !== 11) {
      alert('Please select exactly 11 players');
      return;
    }

    if (!this.captain || !this.viceCaptain) {
      alert('Please select captain and vice-captain');
      return;
    }

    // Save team logic here
    alert('Team saved successfully!');
    this.router.navigate(['/dashboard']);
  }
}