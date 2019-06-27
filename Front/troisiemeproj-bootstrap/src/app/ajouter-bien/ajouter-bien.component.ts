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
    private ajouterBienService: AjouterBienService
  ) {}

  ngOnInit() {
    this.ajouterBienForm = this.formBuilder.group({
      libelle: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      prix_demande: ['', [Validators.required]],
      prix_mini: ['', [Validators.required]],
      nombre_pièces: ['', [Validators.required]],
      superficie: ['', [Validators.required]],
      etage: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.ajouterBienForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.ajouterBienForm.valid) {
      this.ajouterBienService.createAjouterBien(this.ajouterBienForm.value);
    } else {
      this.toastr.error(
        'Veuillez completez le formulaire correctement',
        'Error'
      );
    }
  }
}
