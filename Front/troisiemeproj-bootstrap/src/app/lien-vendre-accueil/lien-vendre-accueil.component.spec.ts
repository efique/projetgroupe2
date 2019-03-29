import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienVendreAccueilComponent } from './lien-vendre-accueil.component';

describe('LienVendreAccueilComponent', () => {
  let component: LienVendreAccueilComponent;
  let fixture: ComponentFixture<LienVendreAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienVendreAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienVendreAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
