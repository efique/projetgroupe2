import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class UtilisateursService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  url = 'http://localhost:3015';


  getUsers() {
    const users = this.http.get(`${this.url}/users/get`).pipe(map(resp => resp));
    return users;
  }

}
