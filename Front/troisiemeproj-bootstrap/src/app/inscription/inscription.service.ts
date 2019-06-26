import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class InscriptionService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}
  url = 'http://localhost:3015';

  getInscription() {
    return this.http.get(`${this.url}/inscription/get`);
  }

  createInscription(data) {
    this.http.post(`${this.url}/auth/signup`, data).subscribe(
      res => {
        console.log(res);
        this.toastr.success(
          'Votre compte a été crée avec succès.',
          'Success'
        );
        this.router.navigateByUrl('/');
      },
      err => {
        console.log('Error occured:', err);
        this.toastr.error(err.message, 'Error occured');
      }
    );
  }
}
