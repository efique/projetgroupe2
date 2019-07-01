import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    if (this.parse.role === 'Administrateur') {
      this.userRole = true;
    }

    if (this.parse.token) {
      this.userLogged = true;
    }
  }
}
