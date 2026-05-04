import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // ייבוא הפונקציה לבדיקת הפלטפורמה
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // 1. הגדרת המשתנה ששולט על הצגת המודל
  showLoginModal: boolean = false; 

  // 2. הגדרת משתנה החיפוש
  searchText: string = '';

  // 3. רשימת הספרים
  books = [
    { title: 'ספר א', author: 'מחבר א' },
    { title: 'ספר ב', author: 'מחבר ב' },
    { title: 'ספר ג', author: 'מחבר ג' }
  ];

 constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
// בדיקה האם הקוד רץ בדפדפן
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (!token) {
        this.showLoginModal = true;
      }
    }
  }

  // 4. מימוש הפונקציה לסגירת המודל (חובה!)
  closeModal(): void {
    this.showLoginModal = false;
  }

  // לוגיקת הסינון לחיפוש
  get filteredBooks() {
    return this.books.filter(book => 
      book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}