import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CreerAnnonceService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3015';

  getCreerAnnonce(data) {
    return this.http.get(`${this.url}/auth/loggedIn`, data);
  }
}
