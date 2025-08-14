import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  otp = '';
  isLoading = false;
  timer = 60;
  canResend = false;

  constructor(private router: Router) {
    this.startTimer();
  }

  startTimer() {
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.canResend = true;
        clearInterval(interval);
      }
    }, 1000);
  }

  onSubmit() {
    if (this.otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/dashboard']);
    }, 2000);
  }

  resendOtp() {
    this.timer = 60;
    this.canResend = false;
    this.startTimer();
    // API call to resend OTP
  }
}