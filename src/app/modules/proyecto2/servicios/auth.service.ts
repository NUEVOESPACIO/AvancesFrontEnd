import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_ENDPOINTS } from '../otros/apidata';

@Injectable() // 👈 NO providedIn
export class AuthService {
  private apiUrl = API_ENDPOINTS.baseurlauth;
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrl+"/auth/login", { username, password }).pipe(
      tap(response => {
        this.token = response.token;
        localStorage.removeItem('authTokenProyect2');
        localStorage.setItem('authTokenProyect2', response.token);        
      })
    );
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('authTokenProyect2');
  }

  logout() {
    this.token = null;
    localStorage.removeItem('authTokenProyect2');
  }
}