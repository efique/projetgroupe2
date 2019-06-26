import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InscriptionService } from './inscription.service';
import { User } from '../User';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {

  private userinscription: User[];

  inscriptionForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    telephone: [''],
    localisation: this.fb.group({
      rue: [''],
      numero: [''],
      postal: [''],
      ville: [''],
    }),
    mail: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { } // , private readonly inscriptionService: InscriptionService

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.userinscription = this.inscriptionForm.value;
      console.log(this.inscriptionForm.value);
    }
  }

  ngOnInit() {
    /* fetchInscriptions(){
      this.inscriptionService.getInscription().subscribe((data: Inscription[]) =>
        this.inscriptions =
      );
    }  */
  }

}
