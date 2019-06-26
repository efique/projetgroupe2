import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ConnexionService {
  
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  url = 'http://localhost:3015';

  createConnexion(data) {
    this.http.post(`${this.url}/auth/signin`, data).subscribe(
      res => {
        let user = (<any>res).user;
        this.toastr.success(
          `Bienvenue ${user.mail}`,
          'Success'
        );
        this.router.navigateByUrl('/');
      },
      err => {
        this.toastr.error("Une erreur est survenue lors de la connexion, veuillez verifier vos login et mot de passe", 'Error occured');
      }
    );
  }
}
