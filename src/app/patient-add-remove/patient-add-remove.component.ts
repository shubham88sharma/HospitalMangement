import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-add-remove',
  templateUrl: './patient-add-remove.component.html',
  styleUrls: ['./patient-add-remove.component.css']
})
export class PatientAddRemoveComponent implements OnInit {

  patients: Patient[];
  selectedPatient: Patient;

  constructor(
    private patientService: PatientService,
    private router: Router) { }

    getPatient(): void 
    {
      this.patientService
          .getPatient()
          .then(patients => this.patients = patients);
    }

    onSelect(patient: Patient): void 
    {
      this.selectedPatient = patient;
    }

    gotoDetail(): void 
    {
      this.router.navigate(['/detail', this.selectedPatient.id]);
    }
  
    ngOnInit(): void 
    {
      this.getPatient();
    }

    add(name: string,prob: string, age: number, image: string): void 
    {
      if (!name) { return; }
      this.patientService.create(name,prob,age,image)
        .then(patient => {
          this.patients.push(patient);
          this.selectedPatient = null;
        });
    }
  
    delete(patient: Patient): void 
    {
      this.patientService
          .delete(patient.id)
          .then(() => {
            this.patients = this.patients.filter(h => h !== patient);
            if (this.selectedPatient === patient) { this.selectedPatient = null; }
          });
    }

    myFunction() : void
    {
      var input, filter, table, tr, td, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }

}
