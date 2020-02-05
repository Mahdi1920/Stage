import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManagerServiceService } from '../../Services/manager-service.service';
@Component({
  selector: 'app-modifier-manager',
  templateUrl: './modifier-manager.component.html',
  styleUrls: ['./modifier-manager.component.css']
})
export class ModifierManagerComponent implements OnInit {
  token: string;
  ajoutForm: FormGroup;

  constructor(private router:Router , private apiService:ManagerServiceService , private formBuilder:FormBuilder ,private routes : ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
  console.log(routeParams.id);
  
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

}
