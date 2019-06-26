import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from './../User';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  // private user: User;
  // connexionForm: FormGroup;

  connexionForm = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.connexionForm.valid) {
      console.log(this.connexionForm.value);
      /* Any API call logic via services goes here */
    }
  }

  ngOnInit() {

  // this.connexionForm = this.fb.group({
  //   mail: ['', Validators.required],
  //   password: ['', Validators.required],
  // });

  }
}
