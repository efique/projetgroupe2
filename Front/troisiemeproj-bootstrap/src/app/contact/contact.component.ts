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

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.contactForm.valid) {
      // this.contact = this.contactForm.value;
      console.log(this.contactForm.value);
    }
  }

  ngOnInit() {
  }

}
