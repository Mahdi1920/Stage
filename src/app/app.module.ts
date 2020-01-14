import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientsComponent } from './clients/clients.component';
import { AuthentificationManagerComponent } from './authentification-manager/authentification-manager.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ComptesComponent } from './comptes/comptes.component';
import { AuthentificationEmployeeComponent } from './authentification-employee/authentification-employee.component';
import { ManagerdetailsComponent } from './managerdetails/managerdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AjouterEmployeeComponent } from './ajouter-employee/ajouter-employee.component';
import { SupprimerEmployerComponent } from './supprimer-employer/supprimer-employer.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    EmployeeComponent,
    ClientsComponent,
    AuthentificationManagerComponent,
    ErreurComponent,
    ComptesComponent,
    AuthentificationEmployeeComponent,
    ManagerdetailsComponent,
    EmployeedetailsComponent,
    AjouterEmployeeComponent,
    SupprimerEmployerComponent,
    ModifierEmployerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
