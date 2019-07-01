import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ListeUtilisateurService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'http://localhost:3015';

  recupUser() {
    this.http.get(`${this.url}/users/get`, {});
  }
}
