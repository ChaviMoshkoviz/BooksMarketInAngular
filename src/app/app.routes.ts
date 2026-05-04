import { Routes } from '@angular/router';
import {LoginComponent} from'./components/login/login'
import { HomeComponent } from './components/home/home.component/home.component';
import { CategoriesComponent } from './components/categories/categories.component/categories.component';
export const routes: Routes = [
  { path: '', component: HomeComponent }, // דף הבית כברירת מחדל
  { path: 'categories', component: CategoriesComponent }, // הוספת הנתיב לקטגוריות
  { path: '**', redirectTo: '' } // ניתוב לכל מקרה של שגיאה חזרה לבית
];