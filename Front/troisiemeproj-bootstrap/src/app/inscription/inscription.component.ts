import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.inscriptionForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
