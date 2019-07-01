import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateursService } from './liste-utilisateurs.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit { //

  foundUsers: any;
  users = this.getUsers();

  constructor(private utilisateursService: UtilisateursService) { }

 getUsers() {
    this.utilisateursService.getUsers().subscribe(
      data => { this.foundUsers = data; // this.foundUsers = data.json();
                this.foundUsers = Array.of(this.foundUsers);
        },
      err => console.error(err),
      () => console.log('getUsers completed')
      );
    return this.foundUsers;
  }

  ngOnInit() {
  }

}
