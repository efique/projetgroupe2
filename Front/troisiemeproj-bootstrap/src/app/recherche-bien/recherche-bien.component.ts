import { Component, OnInit } from '@angular/core';
/* import { FormControl } from '@angular/forms'; */
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recherche-bien',
  templateUrl: './recherche-bien.component.html',
  styleUrls: ['./recherche-bien.component.css']
})

export class RechercheBienComponent implements OnInit {

  /* name = new FormControl(''); */

  searchForm = this.fb.group({
    type_bien: [''],
    localisation: this.fb.group({
      ville: [''],
    }),
    nombre_pieces: [''],
    superficie: [''],
    prix_demande: [''],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.searchForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
