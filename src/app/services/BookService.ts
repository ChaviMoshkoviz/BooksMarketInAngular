import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BooksDTO } from '../models/BooksDTO';
import { PostBooksDTO } from '../models/PostBooksDTO';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // בניית הכתובת המלאה לקונטרולר הספציפי
  private apiUrl = `${environment.apiUrl}/Books`;

  constructor(private http: HttpClient) {}

  // 1. שליפת כל הספרים המאושרים
  getAllBooks(): Observable<BooksDTO[]> {
    return this.http.get<BooksDTO[]>(this.apiUrl);
  }

  // 2. חיפוש לפי סופר
  getBooksByAuthor(author: string): Observable<BooksDTO[]> {
    return this.http.get<BooksDTO[]>(`${this.apiUrl}/author/${author}`);
  }

  // 3. חיפוש לפי ז'אנר
  getBooksByGenre(genre: string): Observable<BooksDTO[]> {
    return this.http.get<BooksDTO[]>(`${this.apiUrl}/genre/${genre}`);
  }

  // 4. שליפת ספרים ממתינים (למנהל בלבד)
  getPendingBooks(): Observable<BooksDTO[]> {
    return this.http.get<BooksDTO[]>(`${this.apiUrl}/pending`);
  }

  // 5. אישור ספר (PUT)
  approveBook(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/approve`, {});
  }

  // 6. הוספת ספר חדש (POST)
  addBook(newBook: PostBooksDTO): Observable<BooksDTO> {
    const payload: BooksDTO = {
      BookId: 0,
      Title: newBook.Title,
      Author: newBook.Author,
      Genre: newBook.Genre,
      Condition: newBook.Condition,
      Description: newBook.Description,
      IsApproved: false,
    };

    return this.http.post<BooksDTO>(this.apiUrl, payload);
  }
}