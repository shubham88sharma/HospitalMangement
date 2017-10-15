import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-manupulation',
  templateUrl: './patient-manupulation.component.html',
  styleUrls: ['./patient-manupulation.component.css']
})
export class PatientManupulationComponent implements OnInit {

  patients: Patient[];
  selectedPatient: Patient;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private user:PatientService) { }

   
  
    ngOnInit() 
    {
      
    }


    logoutUser(e)
    {
      this.user.getUserLoggedIn();
      this.router.navigate(['AdminLogin']);
    }

}
