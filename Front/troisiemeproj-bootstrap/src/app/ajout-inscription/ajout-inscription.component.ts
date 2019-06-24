import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../inscription/inscription.service';
import { Inscription } from '../inscription/inscription.interface';

@Component({
  selector: 'app-ajout-inscription',
  templateUrl: './ajout-inscription.component.html',
  styleUrls: ['./ajout-inscription.component.css']
})
export class AjoutInscriptionComponent implements OnInit {
  inscriptions: Inscription = {
    nom: '',
    prenom: '',
    telephone: '',
    rue: '',
    numero: null,
    postal: '',
    ville: '',
    mail: '',
    password: ''
  };

  constructor(private inscriptionService: InscriptionService) {}

  ngOnInit() {}

  createInscription(data: Inscription) {
    this.inscriptionService.createInscription(data);
  }
}
