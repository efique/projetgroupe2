import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairePropositionComponent } from './faire-proposition.component';

describe('FairePropositionComponent', () => {
  let component: FairePropositionComponent;
  let fixture: ComponentFixture<FairePropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairePropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairePropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
