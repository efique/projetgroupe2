import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  moncompteForm = this.fb.group({
    nom: [''],
    prenom: [''],
    mail: [''],
    telephone: [''],
    localisation: this.fb.group({
      rue: [''],
      numero: [''],
      postal: [''],
      ville: [''],
    }),
    password: [''],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.moncompteForm.value);
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }

}
