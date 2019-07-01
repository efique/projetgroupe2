import { Component, OnInit } from '@angular/core';
import { ListeUtilisateurService } from './liste-utilisateurs.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
  constructor(private listeUtilisateurService: ListeUtilisateurService) {}

  ngOnInit() {
    this.listeUtilisateurService.recupUser();
    console.log(this.listeUtilisateurService.recupUser());
  }
}
