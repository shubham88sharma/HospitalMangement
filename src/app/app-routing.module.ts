import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginPage1Component } from './admin-login-page1/admin-login-page1.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientManupulationComponent } from './patient-manupulation/patient-manupulation.component';
import { PatientAddRemoveComponent } from './patient-add-remove/patient-add-remove.component';
import { PatientEditDetailsComponent } from './patient-edit-details/patient-edit-details.component';
import { SecureGuardGuard } from './secure-guard.guard';
import { PatientListReadonlyComponent } from './patient-list-readonly/patient-list-readonly.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home',  component: HomePageComponent },
    { path: 'detail/:id', canActivate: [SecureGuardGuard] ,component: PatientEditDetailsComponent },
    { path: 'AdminLogin',     component: AdminLoginPage1Component },
    { path: 'PatientList',  component: PatientListComponent },
    { path: 'PatientListReadOnly',  component: PatientListReadonlyComponent },
    { path: 'PatientManupulation', canActivate: [SecureGuardGuard] ,component: PatientManupulationComponent , children:[{path:'addOrRemovePatient',component: PatientAddRemoveComponent},{path:'editPatientDetails',component: PatientListComponent}] },
    { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  