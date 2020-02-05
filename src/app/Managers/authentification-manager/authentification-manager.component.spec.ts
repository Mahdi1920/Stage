import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationManagerComponent } from './authentification-manager.component';

describe('AuthentificationManagerComponent', () => {
  let component: AuthentificationManagerComponent;
  let fixture: ComponentFixture<AuthentificationManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
