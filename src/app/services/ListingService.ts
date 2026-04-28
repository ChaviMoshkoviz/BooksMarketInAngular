import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ListingsDTO } from '../models/ListingsDTO';
import { PostListingsDTO } from '../models/PostListingsDTO';
import { PutListingsDTO } from '../models/PutListingsDTO';
import { DeactivateListingsDTO } from '../models/DeactivateListingsDTO';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private apiUrl = `${environment.apiUrl}/Listings`;

  constructor(private http: HttpClient) {}

  getAllListings(): Observable<ListingsDTO[]> {
    return this.http.get<ListingsDTO[]>(this.apiUrl);
  }

  getListingsByUser(userId: number): Observable<ListingsDTO[]> {
    return this.http.get<ListingsDTO[]>(`${this.apiUrl}/byUser/${userId}`);
  }

  getListingsByPriceRange(minPrice: number, maxPrice: number): Observable<ListingsDTO[]> {
    const params = new HttpParams().set('minPrice', String(minPrice)).set('maxPrice', String(maxPrice));
    return this.http.get<ListingsDTO[]>(`${this.apiUrl}/byPrice`, { params });
  }

  createListing(newListing: PostListingsDTO, token?: string): Observable<ListingsDTO> {
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    // The API sets UserId from the authenticated user on the server side.
    // Send only the fields expected by the server for creation.
    const payload: any = {
      BookId: newListing.BookId,
      ActionType: newListing.ActionType,
      Price: newListing.Price,
      DatePosted: newListing.DatePosted,
    };

    return this.http.post<ListingsDTO>(this.apiUrl, payload, headers ? { headers } : {});
  }

  uploadImage(id: number, file: File, token?: string): Observable<{ url: string }> {
    const form = new FormData();
    form.append('file', file);
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.post<{ url: string }>(`${this.apiUrl}/${id}/upload-image`, form, headers ? { headers } : {});
  }

  updateListing(id: number, update: PutListingsDTO, token?: string): Observable<ListingsDTO> {
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.put<ListingsDTO>(`${this.apiUrl}/${id}`, update, headers ? { headers } : {});
  }

  toggleListingStatus(id: number, token?: string): Observable<any> {
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    // API returns an object with Message, ListingId and IsActive
    return this.http.put<any>(`${this.apiUrl}/${id}/disable`, {}, headers ? { headers } : {});
  }
}
