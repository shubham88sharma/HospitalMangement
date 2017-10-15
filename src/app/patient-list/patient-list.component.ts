import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }    from '@angular/common';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { PatientEditDetailsComponent } from '../patient-edit-details/patient-edit-details.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patient: Patient;
  patients: Patient[];
  selectedPatient: Patient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router)
     { }

    getPatient(): void 
    {
      this.patientService
          .getPatient()
          .then(patients => this.patients = patients);
    }

    onSelect(patients: Patient): void 
    {
      this.selectedPatient = patients;
      this.gotoDetail();
    }

    gotoDetail(): void 
    {
      this.router.navigate(['/detail', this.selectedPatient.id]);
    }

    save(): void 
    {
      console.log("coming inside save");
      this.patientService.update(this.patient)
        .then(() => this.goBack());
    }
  
    goBack(): void 
    {
      this.location.back();
    }
  
    ngOnInit(): void 
    {
      this.getPatient();
    }



}
