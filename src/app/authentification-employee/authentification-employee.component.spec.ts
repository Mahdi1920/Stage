import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationEmployeeComponent } from './authentification-employee.component';

describe('AuthentificationEmployeeComponent', () => {
  let component: AuthentificationEmployeeComponent;
  let fixture: ComponentFixture<AuthentificationEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
