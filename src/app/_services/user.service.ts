import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const API_URL2 = 'http://localhost:8080/api/auth/';
const API_URL_serverJS = 'https://serverjs-projet4.herokuapp.com/';
//const API_URL_serverJS = 'http://localhost:8081/';
//const API_URL2 = 'https://projet4-backend.herokuapp.com/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getNord(): Observable<any> {
    return this.http.get(API_URL_serverJS + 'nord', {
      responseType: 'json',
    });
  }
  getSud(): Observable<any> {
    return this.http.get(API_URL_serverJS + 'sud', {
      responseType: 'json',
    });
  }
  getEst(): Observable<any> {
    return this.http.get(API_URL_serverJS + 'est', {
      responseType: 'json',
    });
  }
  getOuest(): Observable<any> {
    return this.http.get(API_URL_serverJS + 'ouest', {
      responseType: 'json',
    });
  }
  getPollution(): Observable<any> {
    return this.http.get(API_URL_serverJS + 'pollution', {
      responseType: 'json',
    });
  }
}
//http://localhost:8080
//https://serverjs-projet4.herokuapp.com/nord
//https://projet4-backend.herokuapp.com/api/test/
