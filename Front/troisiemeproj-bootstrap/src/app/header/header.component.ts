import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion/connexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  test = null;
  localUser = localStorage.getItem('currentUser');
  parse = JSON.parse(this.localUser);
  userRole = false;
  userLogged = false;
  submitted = false;

  constructor(private connexionService: ConnexionService) {}

  ngOnInit() {
    if (this.parse.role === 'Administrateur') {
      this.userRole = true;
    } else {
      this.userRole = false;
    }

    if (this.parse.token) {
      this.userLogged = true;
    }
  }

  onSubmit() {
    this.submitted = true;

    this.connexionService.logOut();
  }
}
