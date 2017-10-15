import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginPage1Component } from './admin-login-page1/admin-login-page1.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from './patient.service';
import { PatientManupulationComponent } from './patient-manupulation/patient-manupulation.component';
import { PatientAddRemoveComponent } from './patient-add-remove/patient-add-remove.component';
import { PatientEditDetailsComponent } from './patient-edit-details/patient-edit-details.component';
import { SecureGuardGuard } from './secure-guard.guard';
import { PatientListReadonlyComponent } from './patient-list-readonly/patient-list-readonly.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AdminLoginPage1Component,
    PatientListComponent,
    PatientManupulationComponent,
    PatientAddRemoveComponent,
    PatientEditDetailsComponent,
    PatientListReadonlyComponent,
    PatientSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ PatientService, SecureGuardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
