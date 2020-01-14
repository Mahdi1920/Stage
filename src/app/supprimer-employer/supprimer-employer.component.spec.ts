import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerEmployerComponent } from './supprimer-employer.component';

describe('SupprimerEmployerComponent', () => {
  let component: SupprimerEmployerComponent;
  let fixture: ComponentFixture<SupprimerEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
