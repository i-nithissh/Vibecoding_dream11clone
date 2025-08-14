import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OtpComponent } from './auth/otp/otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchListComponent } from './dashboard/match-list/match-list.component';
import { ContestListComponent } from './dashboard/contest-list/contest-list.component';
import { TeamBuilderComponent } from './team/team-builder/team-builder.component';
import { JoinContestComponent } from './contest/join-contest/join-contest.component';
import { WalletViewComponent } from './wallet/wallet-view/wallet-view.component';
import { AddMoneyComponent } from './wallet/add-money/add-money.component';
import { WithdrawMoneyComponent } from './wallet/withdraw-money/withdraw-money.component';
import { ContestLeaderboardComponent } from './leaderboard/contest-leaderboard/contest-leaderboard.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { MatchManagerComponent } from './admin/match-manager/match-manager.component';
import { ContestManagerComponent } from './admin/contest-manager/contest-manager.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'matches', component: MatchListComponent },
  { path: 'contests', component: ContestListComponent },
  { path: 'team-builder/:matchId', component: TeamBuilderComponent },
  { path: 'join-contest/:contestId', component: JoinContestComponent },
  { path: 'wallet', component: WalletViewComponent },
  { path: 'add-money', component: AddMoneyComponent },
  { path: 'withdraw-money', component: WithdrawMoneyComponent },
  { path: 'leaderboard/:contestId', component: ContestLeaderboardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'admin/matches', component: MatchManagerComponent },
  { path: 'admin/contests', component: ContestManagerComponent }
];