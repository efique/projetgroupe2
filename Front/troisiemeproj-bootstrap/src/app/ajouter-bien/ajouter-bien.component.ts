import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouter-bien',
  templateUrl: './ajouter-bien.component.html',
  styleUrls: ['./ajouter-bien.component.css']
})
export class AjouterBienComponent implements OnInit {

  ajouterbienForm = this.fb.group({
    libelle: [''],
    type: [''],
    proprietaire: [''],
    image: [''],
    description: [''],
    localisation: this.fb.group({
      rue: [''],
      numero: [''],
      postal: [''],
      ville: [''],
    }),
    prix_demande: [''],
    prix_mini: [''],
    nombre_pieces: [''],
    superficie: [''],
    etage: [''],
    dependances: [''],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.ajouterbienForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
