import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConnexionService } from './connexion.service';
import { User } from '../User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,  
      private toastr: ToastrService,
      private connexionService: ConnexionService) { }

  ngOnInit() {
    this.connexionForm = this.formBuilder.group({
      mail:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() { return this.connexionForm.controls}

  onSubmit() {
    this.submitted = true;

    if(this.connexionForm.valid){
      this.connexionService.createConnexion(this.connexionForm.value);
    } else {
       this.toastr.error('Veuillez completez le formulaire correctement', "Error");
    }

  }
}
