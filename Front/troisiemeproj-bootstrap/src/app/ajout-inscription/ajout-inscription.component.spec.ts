import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutInscriptionComponent } from './ajout-inscription.component';

describe('AjoutInscriptionComponent', () => {
  let component: AjoutInscriptionComponent;
  let fixture: ComponentFixture<AjoutInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
