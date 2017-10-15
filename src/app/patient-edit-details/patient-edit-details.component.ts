import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Input }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }    from '@angular/common';

import { Patient } from '../patient';
import { PatientService } from '../patient.service'


@Component({
  selector: 'app-patient-edit-details',
  templateUrl: './patient-edit-details.component.html',
  styleUrls: ['./patient-edit-details.component.css']
})
export class PatientEditDetailsComponent implements OnInit {

  patient: Patient;
  selectedPatient: Patient;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void
  {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.patientService.getPatients(+params.get('id')))
      .subscribe(patient => this.patient = patient);
  }

  save(): void 
  {
    this.patientService.update(this.patient)
      .then(() => this.goBack());
  }

  goBack(): void 
  {
    this.location.back();
  }

}
