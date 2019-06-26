import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjouterBienService } from './ajouter-bien.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-bien',
  templateUrl: './ajouter-bien.component.html',
  styleUrls: ['./ajouter-bien.component.css']
})
export class AjouterBienComponent implements OnInit {
  ajouterBienForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private ajouterBienService: AjouterBienService) {}

  ngOnInit() {
    this.ajouterBienForm = this.formBuilder.group({
      libelle: ['', [Validators.required]],
      type: ['', [Validators.required]],
      proprietaire: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      rue: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      prix_demande: ['', [Validators.required]],
      prix_mini: ['', [Validators.required]],
      nombre_pieces: ['', [Validators.required]],
      superficie: ['', [Validators.required]],
      etage: ['', [Validators.required]],
      dependances: ['', [Validators.required]],
    });
  }

  get formControls() { return this.ajouterBienForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.ajouterBienForm.valid) {
      this.ajouterBienService.createAjouterBien(this.ajouterBienForm.value);
    } else {
       this.toastr.error('Veuillez completez le formulaire correctement', 'Error');
    }
  }
}
