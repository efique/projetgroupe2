import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ConnexionService } from './connexion.service';
import { User } from '../User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  // connexionForm: FormGroup;
  submitted = false;

  // private user: User;
  // connexionForm: FormGroup;

  connexionForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
  });

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private connexionService: ConnexionService) { }

  get formControls() { return this.connexionForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.connexionForm.valid) {
      this.connexionService.createConnexion(this.connexionForm.value);
      console.log(this.connexionForm.value);
    } else {
       this.toastr.error('Veuillez completez le formulaire correctement', 'Error');
    }
  }

  ngOnInit() {
    // this.connexionForm = this.formBuilder.group({
    //   mail:  ['', [Validators.required, Validators.email]],
    //   password:  ['', Validators.required]
    // });
  }
}
