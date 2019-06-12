import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBienComponent } from './ajouter-bien.component';

describe('AjouterBienComponent', () => {
  let component: AjouterBienComponent;
  let fixture: ComponentFixture<AjouterBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
