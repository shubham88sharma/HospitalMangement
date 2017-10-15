import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PatientService } from './patient.service';

@Injectable()
export class SecureGuardGuard implements CanActivate {
  
  public href: string = "";

  constructor(private user: PatientService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
      if(this.user.getUserLoggedIn())
      {
        return true;
      }
      else
      {
        
        this.router.navigate(['/AdminLogin']);
        alert("please login first");
        
        //this.user.login(state.url);
        // this.href = this.router.url;
        // if(this.user.getUserLoggedIn())
        // {
        //   this.router.navigate([this.href]);
        //   console.log(this.href);
        // }
        return false;
      }
    }
}
