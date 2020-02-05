import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employes/employee/employee.component';
import { ClientsComponent } from './Client/clients/clients.component';
import { AuthentificationManagerComponent } from './Managers/authentification-manager/authentification-manager.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ManagerdetailsComponent } from './Managers/managerdetails/managerdetails.component';
import { EmployeedetailsComponent } from './Employes/employeedetails/employeedetails.component';
import { AjouterEmployeeComponent } from './Employes/ajouter-employee/ajouter-employee.component';
import { ModifierEmployerComponent } from './Employes/modifier-employer/modifier-employer.component';
import {TokenInterceptor} from './Classes/intercepters';
import { CreerManagerComponent } from './Managers/creer-manager/creer-manager.component';
import { MenuComponent } from './menu/menu.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AjouterClientComponent } from './Client/ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './Client/modifier-client/modifier-client.component';
import { ModifierManagerComponent } from './Managers/modifier-manager/modifier-manager.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ClientsComponent,
    AuthentificationManagerComponent,
    ErreurComponent,
    ManagerdetailsComponent,
    EmployeedetailsComponent,
    AjouterEmployeeComponent,
    ModifierEmployerComponent,
    CreerManagerComponent,
    MenuComponent,
    AjouterClientComponent,
    ModifierClientComponent,
    ModifierManagerComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' 
    })
    

  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
