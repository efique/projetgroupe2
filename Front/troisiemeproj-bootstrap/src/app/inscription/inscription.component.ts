import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../User';
import { InscriptionService } from './inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm = this.fb.group({
    details: this.fb.group({
      id: '',
      nom: '',
      prenom: '',
      telephone: ''
  }),
    users: this.fb.group({
      id: '',
      mail: '',
      password: ''
  }),
    localisations: this.fb.group({
      id: '',
      rue: '',
      numero: '',
      postal: '',
      ville: ''
    }),
  });

  inscriptions: User[];

  constructor(
    private fb: FormBuilder,
    private inscriptionService: InscriptionService
  ) {} // , private readonly inscriptionService: InscriptionService

  ngOnInit() {
    this.inscriptionService.getInscription().subscribe((data: User[]) => {
      this.inscriptions = data;
    });
  }
}
