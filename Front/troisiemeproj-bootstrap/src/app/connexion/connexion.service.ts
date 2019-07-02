import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
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
        console.log(res)
        let user = (res as any).user;
        this.toastr.success(`Bienvenue ${user.mail}`, 'Success');
        user = JSON.stringify(user);
        localStorage.setItem(`currentUser`, user);
        this.loggedIn();
      },
      err => {
        this.toastr.error(
          'Une erreur est survenue lors de la connexion, veuillez verifier vos login et mot de passe',
          'Error occured'
        );
      }
    );
  }

  public async logOut() {
    localStorage.removeItem('currentUser');
  }

  public async loggedIn() {
    const currentUser = JSON.parse(localStorage.getItem(`currentUser`));
    if (currentUser && currentUser.token) {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${currentUser.token}`);
      this.router.navigateByUrl('/');
    }
  }
}
