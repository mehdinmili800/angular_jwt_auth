import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../token/TokenStorageService";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/v1/auth'; // Update with your API URL

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  authenticate(username: string | undefined, password: string | undefined): Observable<any> {
    const credentials = { username, password };
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials)
      .pipe(tap(response => {
        // Save token to local storage upon successful login
        this.tokenStorageService.saveToken(response.access_token);
      }));
  }
}
