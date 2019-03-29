import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InscriptionService } from './inscription.service';
import { Inscription } from '../Inscription';

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
      ville: [''],
    }),
    mail: [''],
    password: [''],
  });

  inscriptions: Inscription[];

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.inscriptionForm.value);
  }

  constructor(private fb: FormBuilder, private readonly inscriptionService: InscriptionService) { }

  ngOnInit() {
    /* fetchInscriptions(){
      this.inscriptionService.getInscription().subscribe((data: Inscription[]) =>
        this.inscriptions =
      );
    } */
  }

}
