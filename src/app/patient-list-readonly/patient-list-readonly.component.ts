import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }    from '@angular/common';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { PatientEditDetailsComponent } from '../patient-edit-details/patient-edit-details.component';

@Component({
  selector: 'app-patient-list-readonly',
  templateUrl: './patient-list-readonly.component.html',
  styleUrls: ['./patient-list-readonly.component.css']
})
export class PatientListReadonlyComponent implements OnInit {
  selectedPatient: Patient;
  patients: Patient[];

  constructor(private patientService: PatientService) { }

  getPatient(): void 
  {
    this.patientService
        .getPatient()
        .then(patients => this.patients = patients);
  }

  ngOnInit(): void 
  {
    this.getPatient();
  }
}
