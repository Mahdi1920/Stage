import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Employes/employee/employee.component';
import { ClientsComponent } from './Client/clients/clients.component';
import { AuthentificationManagerComponent } from './Managers/authentification-manager/authentification-manager.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ManagerdetailsComponent } from './Managers/managerdetails/managerdetails.component';
import { EmployeedetailsComponent } from './Employes/employeedetails/employeedetails.component';
import { AjouterEmployeeComponent } from './Employes/ajouter-employee/ajouter-employee.component';
import { ModifierEmployerComponent } from './Employes/modifier-employer/modifier-employer.component';
import { CreerManagerComponent } from './Managers/creer-manager/creer-manager.component';
import { MenuComponent } from './menu/menu.component';
import { AjouterClientComponent } from './Client/ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './Client/modifier-client/modifier-client.component';
import { ModifierManagerComponent } from './Managers/modifier-manager/modifier-manager.component';




const routes: Routes = [
  {path:'Employee', component:EmployeeComponent},
  {path:'client', component: ClientsComponent},
  {path:'authentificationManager', component:AuthentificationManagerComponent },
  {path:'Manager/:id', component:ManagerdetailsComponent },
  {path:'employeeDetails/:id', component:EmployeedetailsComponent },
  {path:'ajouterEmployee', component:AjouterEmployeeComponent },
  {path:'modifierEmployee/:id', component:ModifierEmployerComponent },
  {path:'creerCompte', component:CreerManagerComponent },
  {path:'menu', component:MenuComponent },
  {path:'ajouterClient', component:AjouterClientComponent },
  {path:'modifierClient/:id', component:ModifierClientComponent },
  {path:'modifierManager/:id', component:ModifierManagerComponent },
  {path:'', redirectTo:'authentificationManager' , pathMatch:'full'},
  {path:'**', component:ErreurComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
