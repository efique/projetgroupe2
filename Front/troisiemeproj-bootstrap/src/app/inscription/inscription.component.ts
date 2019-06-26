import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { InscriptionService } from './inscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,  
    private toastr: ToastrService,
    private inscriptionService: InscriptionService) {}

  ngOnInit() {
    this.inscriptionForm = this.formBuilder.group({
      details: this.formBuilder.group({
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        telephone: ['', [Validators.required]]
    }),
      localisations: this.formBuilder.group({
        rue: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        postal: ['', [Validators.required]],
        ville: ['', [Validators.required]]
      }),
      users: this.formBuilder.group({
        mail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        // confirmPassword: ['', Validators.required]
      }),
    }, {
    // validator: MustMatch('password', 'confirmPassword')
    });
  }

  get formControls() { return this.inscriptionForm.controls}

  onSubmit() {
    this.submitted = true;

    if(this.inscriptionForm.valid){
      this.inscriptionService.createInscription(this.inscriptionForm.value);
    } else {
       this.toastr.error('Veuillez completez le formulaire correctement', "Error");
    }
  }
}

// export function MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];

//       if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//           // return if another validator has already found an error on the matchingControl
//           return;
//       }

//       // set error on matchingControl if validation fails
//       if (control.value !== matchingControl.value) {
//           matchingControl.setErrors({ mustMatch: true });
//       } else {
//           matchingControl.setErrors(null);
//       }
//   }
// }