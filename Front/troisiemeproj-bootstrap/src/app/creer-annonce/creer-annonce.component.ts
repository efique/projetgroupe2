import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {

  creerannonceForm = this.fb.group({
    bien: [''],
    proprietaire: [''],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.creerannonceForm.value);
  }

  ngOnInit() {
  }

}
