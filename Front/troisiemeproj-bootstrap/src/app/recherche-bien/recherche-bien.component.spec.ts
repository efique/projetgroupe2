import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheBienComponent } from './recherche-bien.component';

describe('RechercheBienComponent', () => {
  let component: RechercheBienComponent;
  let fixture: ComponentFixture<RechercheBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
