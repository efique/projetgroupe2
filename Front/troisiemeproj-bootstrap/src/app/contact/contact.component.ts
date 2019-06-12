import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    nom: [''],
    prenom: [''],
    telephone: [''],
    mail: [''],
    message: [''],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
