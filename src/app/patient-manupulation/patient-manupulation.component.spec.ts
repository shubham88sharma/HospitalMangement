import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManupulationComponent } from './patient-manupulation.component';

describe('PatientManupulationComponent', () => {
  let component: PatientManupulationComponent;
  let fixture: ComponentFixture<PatientManupulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientManupulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManupulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
