import { Component, OnInit } from '@angular/core';
import { Employe } from '../../Classes/Employe';
import { EmployeesService } from '../../Services/employees.service';
import { ManagerServiceService } from '../../Services/manager-service.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Manager } from '../../Classes/Manager';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employes:Employe[];
  employe:Employe;
  managers:Manager[];
 mySubscription: any;  
  token: string;
  popoverTitle:string="Cofirmer";
  popoverMessage:string="Voulez-Vous le supprimer ?? ";
  id1: any;
  

  constructor(private apiService: EmployeesService, private router:Router, private routes : ActivatedRoute ,private apiService1: ManagerServiceService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  } 

  ngOnInit() {
    /*const routeParams = this.routes.snapshot.params;
  console.log(routeParams.id);
*/
     this.apiService.getEmployes()
    .subscribe( (data : any) => {
        this.employes = data;
        console.log(this.employes);
    });
    
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['authentificationManager']);
  }
     }
     
     edit(employe: Employe): void {
      this.router.navigate(['modifierEmployee', + employe.id]);
    }

    profil(): void {
      this.router.navigate(['Manager', + this.id1]);
    }
    

        supprimer(id: number): void{
          console.log(id);
      this.apiService.supprimerEmploye(id)
      .subscribe( ()  => {
          this.router.navigate(['Employee']);
        });
      }
}
