import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient) {}

    url = 'http://localhost:3015';

getAll() {
    return this.http.get<User[]>(`${this.url}/users/get`);
  }
}
