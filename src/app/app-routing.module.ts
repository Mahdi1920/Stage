import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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



const routes: Routes = [
  {path:'Manager', component:ManagerComponent },
  {path:'Employee', component:EmployeeComponent},
  {path:'client', component: ClientsComponent},
  {path:'authentificationManager', component:AuthentificationManagerComponent },
  {path:'comptes', component:ComptesComponent},
  {path:'authentificationEmployee', component:AuthentificationEmployeeComponent },
  {path:'managerDetails', component:ManagerdetailsComponent },
  {path:'employeeDetails', component:EmployeedetailsComponent },
  {path:'ajouterEmployee', component:AjouterEmployeeComponent },
  {path:'supprimerEmployee', component:SupprimerEmployerComponent },
  {path:'modifierEmployee', component:ModifierEmployerComponent },
  {path:'', redirectTo:'comptes' , pathMatch:'full'},
  {path:'**', component:ErreurComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
