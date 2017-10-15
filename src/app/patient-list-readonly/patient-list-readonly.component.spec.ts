import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListReadonlyComponent } from './patient-list-readonly.component';

describe('PatientListReadonlyComponent', () => {
  let component: PatientListReadonlyComponent;
  let fixture: ComponentFixture<PatientListReadonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListReadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
