import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private patientService: PatientService,
    private router: Router,
    private user:PatientService) { }

  ngOnInit() {
  }

  logoutUser(e)
  {
    
    if(this.user.getUserLoggedIn())
    {
    this.router.navigate(['AdminLogin']);
    }
    this.user.setUserLoggedOut();
  }

  checkStatus()
  {
    
    if(this.user.getUserLoggedIn())
    {
      return true;
      
    }
    else
    {
      return false;
    }
    
  }
  checkStatus2()
  {
    
    if(this.user.getUserLoggedIn())
    {
      return false;
      
    }
    else
    {
      return true;
    }
    
  }

}
