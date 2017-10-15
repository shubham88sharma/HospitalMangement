import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router }            from '@angular/router';

import 'rxjs/add/operator/toPromise'; //oerators can be performed on observables

import {Patient} from './patient';

@Injectable()
export class PatientService
{
    private headers = new Headers({'Content-Type': 'application/json'});
    private patientsURL = 'api/patients';  // URL to web api

    private isUserLoggedIn = false;
    private username;

    constructor(private http: Http, private router: Router ) 
    { 
      this.isUserLoggedIn=false; 
    }

      setUserLoggedIn()
      {
        this.isUserLoggedIn=true;
      }

      getUserLoggedIn()
      {
        return this.isUserLoggedIn;
      }

      setUserLoggedOut()
      {
        this.isUserLoggedIn=false;
      }

      getUserLoggedOut()
      {
        return this.isUserLoggedIn;
      }


      // login(redirect?: string)
      // {
      //   const _redirect = redirect ? redirect : this.router.url;
      //   localStorage.setItem('authRedirect', _redirect);
      // }
    
      getPatient(): Promise<Patient[]> 
      {
        return this.http.get(this.patientsURL)
                   .toPromise()
                   .then(response => response.json().data as Patient[])
                   .catch(this.handleError);
      }

      getPatients(id: number): Promise<Patient> 
      {
        const url = `${this.patientsURL}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Patient)
          .catch(this.handleError);
      }

      delete(id: number): Promise<void> 
      {
        const url = `${this.patientsURL}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }
    
      create(name: string,prob: string, age: number, image: string): Promise<Patient> 
      {
        return this.http
          .post(this.patientsURL, JSON.stringify({name: name, problem: prob, age: age, image: image}), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Patient)
          .catch(this.handleError);
      }

      update(patient: Patient): Promise<Patient> 
      {
        console.log("coming inside update1");
        const url = `${this.patientsURL}/${patient.id}`;
        console.log("coming inside update2");
        return this.http
          .put(url, JSON.stringify(patient), {headers: this.headers})
          .toPromise()
          .then(() => patient)
          .catch(this.handleError);

          
      }

      private handleError(error: any): Promise<any>
      {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }
}