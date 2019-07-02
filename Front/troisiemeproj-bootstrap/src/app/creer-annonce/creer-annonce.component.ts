import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreerAnnonceService } from './creer-annonce.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {
  creerannonceForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private creerAnnonceService: CreerAnnonceService
  ) {}

  ngOnInit() {
    this.creerannonceForm = this.formBuilder.group({
      bien: '',
      proprietaire: ''
    });
  }

  get formControls() {
    return this.creerannonceForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.creerannonceForm.valid) {
      this.creerAnnonceService.getCreerAnnonce(
        this.creerannonceForm.value.mail
      );
    } else {
      this.toastr.error(
        'Veuillez completez le formulaire correctement',
        'Error'
      );
    }
  }
}
