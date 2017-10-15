import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddRemoveComponent } from './patient-add-remove.component';

describe('PatientAddRemoveComponent', () => {
  let component: PatientAddRemoveComponent;
  let fixture: ComponentFixture<PatientAddRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAddRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
