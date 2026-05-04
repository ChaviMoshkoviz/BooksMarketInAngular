import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { LoginComponent } from './components/login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 showLoginModal = false;

 constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // בדיקה האם המודל כבר הוצג בביקור הנוכחי
    if (isPlatformBrowser(this.platformId)) {
      const hasSeenModal = sessionStorage.getItem('hasSeenLoginModal');
      const token = localStorage.getItem('token');

      if (!token && !hasSeenModal) {
        this.showLoginModal = true;
        // מסמנים שראינו את המודל פעם אחת
        sessionStorage.setItem('hasSeenLoginModal', 'true');
      }
    }
  }

  openLogin() {
    this.showLoginModal = true;
  }
  closeModal() {
    this.showLoginModal = false;
  }

}
