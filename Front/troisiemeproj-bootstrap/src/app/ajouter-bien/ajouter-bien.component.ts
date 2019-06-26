import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Bien } from '../Bien';

@Component({
  selector: 'app-ajouter-bien',
  templateUrl: './ajouter-bien.component.html',
  styleUrls: ['./ajouter-bien.component.css']
})
export class AjouterBienComponent implements OnInit {

  private bien: Bien;

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

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.ajouterbienForm.valid) {
      this.bien = this.ajouterbienForm.value;
      console.log(this.ajouterbienForm.value);
    }
  }

  ngOnInit() {
  }

}
