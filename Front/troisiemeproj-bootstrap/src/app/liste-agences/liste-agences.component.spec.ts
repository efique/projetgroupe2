import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAgencesComponent } from './liste-agences.component';

describe('ListeAgencesComponent', () => {
  let component: ListeAgencesComponent;
  let fixture: ComponentFixture<ListeAgencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAgencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
