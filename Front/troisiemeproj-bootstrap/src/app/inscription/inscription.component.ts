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

  constructor(
    private fb: FormBuilder,
    private inscriptionService: InscriptionService
  ) {} // , private readonly inscriptionService: InscriptionService

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.userinscription = this.inscriptionForm.value;
      console.log(this.inscriptionForm.value);
    }
  }

  ngOnInit() {
    this.inscriptionService.getInscription().subscribe((data: User[]) => {
      this.userinscription = data;
    });
  }
}
