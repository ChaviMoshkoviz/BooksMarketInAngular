import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserDTO } from '../models/usersDTO';
import { RegisterUserDTO } from '../models/RegisterUserDTO';
import { PutUsersDTO } from '../models/PutUsersDTO';
import { DeactivateUsersDTO } from '../models/DeactivateUsersDTO';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/Users`;

  constructor(private http: HttpClient) {}

  getActiveUsers(token?: string): Observable<UserDTO[]> {
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get<UserDTO[]>(this.apiUrl, headers ? { headers } : {});
  }

  getUserById(userId: number): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.apiUrl}/${userId}`);
  }

  registerUser(newUser: RegisterUserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${this.apiUrl}/register`, newUser);
  }

  login(email: string, password: string): Observable<{ Token: string }> {
    // send credentials in body to match API
    return this.http.post<{ Token: string }>(`${this.apiUrl}/login`, { email, password });
  }

  updateUser(id: number, update: PutUsersDTO, token?: string): Observable<UserDTO> {
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.put<UserDTO>(`${this.apiUrl}/${id}`, update, headers ? { headers } : {});
  }

  changeUserStatus(id: number, token?: string): Observable<DeactivateUsersDTO> {
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.put<DeactivateUsersDTO>(`${this.apiUrl}/deactivate/${id}`, {}, headers ? { headers } : {});
  }
}
