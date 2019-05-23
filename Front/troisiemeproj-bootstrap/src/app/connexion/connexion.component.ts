import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm = this.fb.group({
    mail: [''],
    password: [''],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.connexionForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
