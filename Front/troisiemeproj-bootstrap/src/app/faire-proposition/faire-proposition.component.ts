import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PropositionService } from './faire-proposition.service';

@Component({
  selector: 'app-faire-proposition',
  templateUrl: './faire-proposition.component.html',
  styleUrls: ['./faire-proposition.component.css']
})
export class FairePropositionComponent implements OnInit {

  propositionForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private propositionService: PropositionService) { }

  ngOnInit() {
    this.propositionForm = this.formBuilder.group({
      prix_propose:  ['', [Validators.required]]
    });
  }

  get formControls() { return this.propositionForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.propositionForm.valid) {
      // this.propositionService.createProposition(this.propositionForm.value);
    } else {
       this.toastr.error('Veuillez completez le formulaire correctement', 'Error');
    }
  }

}
