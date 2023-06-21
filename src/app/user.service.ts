import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://localhost:44340/';

  constructor(private http: HttpClient) { }


  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl +'register',user)
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl +'login',credentials)

    
  }
}




