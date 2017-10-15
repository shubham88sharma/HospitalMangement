import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  }            from '@angular/router';
import { PatientService } from '../patient.service';

import {ButtonModule} from 'primeng/primeng';

@Component({
  selector: 'app-admin-login-page1',
  templateUrl: './admin-login-page1.component.html',
  styleUrls: ['./admin-login-page1.component.css']
})
export class AdminLoginPage1Component implements OnInit {

  constructor(private router: Router, private user: PatientService) 
  { 

  }

  ngOnInit() {
  }

  loginUser(e)
  {
    //e.preventDefault(); 
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if(username=='test' && password=='admin')
    {
      this.user.setUserLoggedIn();
      this.router.navigate(['PatientManupulation/addOrRemovePatient']);
    }
    else
    {
      alert("Please give correct username and password");
    }
  }

}
