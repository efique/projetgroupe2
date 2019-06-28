import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MonCompteService } from './mon-compte.service';


@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {
  moncompteForm: FormGroup;
  changermdpForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private moncompteService: MonCompteService
  ) {}

  ngOnInit() {

    this.moncompteForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      rue: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      }),

    this.changermdpForm = this.fb.group(
      {
        ancienpassword: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmation: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirmation')
      }
    );
  }

  get formControls() {
    return this.moncompteForm.controls;
  }

  get formMdpControls() {
    return this.changermdpForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.moncompteForm.valid) {
      // this.moncompteService.modifyCompte(this.moncompteForm.value);
    } else {
      this.toastr.error(
        'Veuillez completez le formulaire correctement',
        'Error'
      );
    }
  }

  onSubmitMdp() {
    this.submitted = true;

    if (this.changermdpForm.valid) {
      // this.moncompteService.modifyMdp(this.changermdpForm.value);
    } else {
      this.toastr.error(
        'Veuillez completez le formulaire correctement',
        'Error'
      );
    }
  }

}

export function MustMatch(password, confirmation) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmation];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
