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

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }



  ngOnInit() {
  }

}
