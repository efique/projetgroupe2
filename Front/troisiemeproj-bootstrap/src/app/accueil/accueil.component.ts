import { Component, OnInit } from '@angular/core';
// import { UserService } from '../connexion/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
// users: User[] = [];


  constructor(
    // private userService: UserService
    ) { }

  ngOnInit() {
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   this.users = users;
    // })
  }
}
