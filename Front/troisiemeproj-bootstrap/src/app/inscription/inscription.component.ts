import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../User';
import { InscriptionService } from './inscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm = this.fb.group({
    nom: [''],
    prenom: [''],
    telephone: [''],
    localisation: this.fb.group({
      rue: [''],
      numero: [''],
      postal: [''],
      ville: ['']
    }),
    mail: [''],
    password: ['']
  });

  inscriptions: User[];

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.inscriptionForm.value);
  }

  constructor(
    private fb: FormBuilder,
    private inscriptionService: InscriptionService,
    private router: Router
  ) {} // , private readonly inscriptionService: InscriptionService

  ngOnInit() {
    this.inscriptionService.getInscription().subscribe((data: User[]) => {
      this.inscriptions = data;
    });
  }

  goToAddInscription() {
    this.router.navigateByUrl('/ajout-inscription');
  }
}
