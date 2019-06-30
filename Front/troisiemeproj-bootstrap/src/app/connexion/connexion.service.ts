import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
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
        user = JSON.stringify(user);
        localStorage.setItem(`currentUser`, user);
        // this.newResponse(data);
        // this.authorization(data);
        this.loggedIn();
        // this.router.navigateByUrl('./');
      },
      err => {
        this.toastr.error("Une erreur est survenue lors de la connexion, veuillez verifier vos login et mot de passe", 'Error occured');
      }
    );
  }

  // public async newResponse(data){
  //   let body = data;
  //   return of(new HttpResponse({status: 200, body}))
  // }

  // public async authorization(data){
  //   if(request.headers.get('Authorization') === data.token){
  //     let body = data;
  //   return of(new HttpResponse({status: 200, body}))
  //   } else{
  //     return throwError({
  //       error : {
  //         message: 'Unauthorized'
  //       }
  //     })
  //   }
  // }

  public async logOut() {
    return console.log('test');
  }

  public async loggedIn() {
    let currentUser = JSON.parse(localStorage.getItem(`currentUser`));
    if (currentUser && currentUser.token){
      let headers = new Headers();
      headers.append("Authorization", `Bearer ${currentUser.token}`);
      // request.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${currentUser.token}`
      //   }
      // });
      
      this.router.navigateByUrl('./');
    }
  }
}
