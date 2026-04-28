import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // אובייקט לאחסון נתוני הטופס
  loginData = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    // קריאה לסרביס שיצרת
    this.userService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (res) => {
        // שמירת הטוקן ב-LocalStorage
        localStorage.setItem('token', res.Token);
        // ניתוב לדף הבית לאחר הצלחה
        this.router.navigate(['/']); 
      },
      error: (err) => {
        this.errorMessage = 'אימייל או סיסמה שגויים';
      }
    });
  }
}