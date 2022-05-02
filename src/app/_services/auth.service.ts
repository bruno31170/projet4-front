import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'https://projet4-backend.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions
    );
  }

  register(user): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username: user.username,
        email: user.email,
        password: user.password,
      },
      httpOptions
    );
  }
  getAllUser(): Observable<any> {
    return this.http.get(AUTH_API + 'allUser', { responseType: 'json' });
  }
  deleteUser(id: Number): Observable<any> {
    return this.http.get(AUTH_API + 'deleteUser' + id, {
      responseType: 'text',
    });
  }
}
//http://localhost:8080/api/auth/
//https://projet4-backend.herokuapp.com/api/auth/
