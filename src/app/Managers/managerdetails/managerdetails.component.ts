import { Component, OnInit } from '@angular/core';
import { Manager } from '../../Classes/Manager';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ManagerServiceService } from '../../Services/manager-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-managerdetails',
  templateUrl: './managerdetails.component.html',
  styleUrls: ['./managerdetails.component.css']
})
export class ManagerdetailsComponent implements OnInit {
  token: string;
  managers:Manager[];
  ajoutForm: FormGroup;
  mySubscription: any;
  id:any;
  id1:any;
  constructor(private apiService: ManagerServiceService, private router:Router , private routes : ActivatedRoute ,private formBuilder:FormBuilder ) {
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
    const routeParams = this.routes.snapshot.params;
  //console.log(routeParams.id);
  this.id=routeParams.id;
     this.apiService.getId()
    .subscribe( (data : any) => {
        this.id1=data;
        
        
    });
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['authentificationManager']);
  }
  this.ajoutForm = this.formBuilder.group(       
    {id:[],
    nom:[''],
    prenom:[''],       
    email: [''], 
    username:[''],
    password:[''], 
    adresse:[''], 
    naissance:[''],
    telephone:[''],
    genre:[] }) ;

    this.apiService.getManagerById(routeParams.id).subscribe((data: any) => {
      console.log(data)
      this.ajoutForm.patchValue(data);
  });
  }

      supprimer(id: number): void{
        console.log(id);
    this.apiService.supprimerManager(id)
    .subscribe( ()  => {
      window.localStorage.removeItem('token');
        this.router.navigate(['authentificationManager']);
       
      });
  }
  onModifier(){
    this.apiService.modifierManager(this.ajoutForm.value).subscribe(() => {
    //this.router.navigate(['Manager'+ this.id]);
    },
      error => {
        alert(error);
      });
  }

  
}
