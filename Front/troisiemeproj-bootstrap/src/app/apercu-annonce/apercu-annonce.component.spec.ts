import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuAnnonceComponent } from './apercu-annonce.component';

describe('ApercuAnnonceComponent', () => {
  let component: ApercuAnnonceComponent;
  let fixture: ComponentFixture<ApercuAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApercuAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
