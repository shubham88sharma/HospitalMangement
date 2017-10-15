import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import 'rxjs/add/observable/of';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Patient } from '../patient';
import { PatientSearchService } from './patient-search.service';
import { PatientService }     from '../patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css'],
  providers: [PatientSearchService]
})
export class PatientSearchComponent implements OnInit 
{
  patientss : Patient[];
  patients: Observable<Patient[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private patientSearchService: PatientSearchService,
    private patientService: PatientService,
    private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void 
  {
    this.patients = this.searchTerms
      .debounceTime(100)        // wait 100ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.patientSearchService.search(term)
        // or the observable of empty patients if there was no search term
        : Observable.of<Patient[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Patient[]>([]);
      });

      this.getPatient();
  }

  gotoDetail(patient: Patient): void {
    let link = ['/detail', patient.id];
    this.router.navigate(link);
  }

  getPatient(): void 
  {
    this.patientService
        .getPatient()
        .then(patients => this.patientss = patients);
  }

  myFunction2() : void
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
