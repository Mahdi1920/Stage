import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerManagerComponent } from './creer-manager.component';

describe('CreerManagerComponent', () => {
  let component: CreerManagerComponent;
  let fixture: ComponentFixture<CreerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
