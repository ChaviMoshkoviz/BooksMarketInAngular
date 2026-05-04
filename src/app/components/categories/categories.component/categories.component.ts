import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // נתוני מסננים
  cities: string[] = ['אלעד', 'בני ברק', 'ירושלים', 'מודיעין עילית', 'פתח תקווה']; // כדאי להביא מה-API
  categories: string[] = ['מתח', 'דרמה', 'רגש', 'ילדים', 'היסטוריה'];
  conditions: string[] = ['חדש', 'כמעט חדש', 'טוב', 'משומש', 'ישן'];

  // בחירות המשתמש
  selectedCity: string = '';
  selectedType: string = 'all'; // מכירה / מסירה / הכל
  selectedCategory: string = '';
  selectedCondition: string = '';
  maxPrice: number = 500;

  books: any[] = []; // כאן יאוחסנו הספרים שיחזרו מהשרת

  ngOnInit() {}

  // פונקציה שתשלח את כל המסננים לשרת (C#)
  applyFilters() {
    console.log('מסננים שנשלחו:', {
      city: this.selectedCity,
      type: this.selectedType,
      category: this.selectedCategory,
      condition: this.selectedCondition,
      price: this.selectedType === 'sale' ? this.maxPrice : null
    });
    // כאן תבוא הקריאה ל-bookService.getFilteredBooks(...)
  }
}