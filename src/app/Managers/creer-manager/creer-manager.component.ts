import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { ManagerServiceService } from '../../Services/manager-service.service';
@Component({
  selector: 'app-creer-manager',
  templateUrl: './creer-manager.component.html',
  styleUrls: ['./creer-manager.component.css']
})
export class CreerManagerComponent implements OnInit {
  creerForm: FormGroup;
  token: string;
  constructor(private router:Router ,private formBuilder:FormBuilder , private apiService:ManagerServiceService) { }

  ngOnInit() {
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   /*if(!this.token){
      this.router.navigate(['authentificationManager']);
  }*/
    this.creerForm = this.formBuilder.group(       
      {id:[],
      nom:['',Validators.required],
      prenom:['',Validators.required],       
      email: ['',Validators.required], 
      username:['',Validators.required],
      password:['',Validators.required], 
      adresse:['',Validators.required], 
      naissance:['',Validators.required],
      telephone:['',Validators.required],
      genre:['',Validators.required],       
      poste:['',Validators.required],      
      salaire:['',Validators.required] }) 

  }
    public get nom() { return this.creerForm.controls.nom; }
    public get prenom() { return this.creerForm.controls.prenom; }
    public get email() { return this.creerForm.controls.email; }
    public get username() { return this.creerForm.controls.username; }
    public get password() { return this.creerForm.controls.password; }
    public get telephone() { return this.creerForm.controls.telephone; }

   

  onCreer() {     
    console.log(this.creerForm.value);
    /*console.log(this.creerForm.value['nom']);     
    console.log(this.creerForm.value['prenom']);     
    console.log(this.creerForm.get('email').value); 
    console.log(this.creerForm.value['username']); 
    console.log(this.creerForm.value['password']); 
    console.log(this.creerForm.value['adresse']); 
    console.log(this.creerForm.value['naissance']);  
    console.log(this.creerForm.value['telephone']);              
    console.log(this.creerForm.value['genre']);    
    console.log(this.creerForm.value['poste']);     
    console.log(this.creerForm.value['salaire']);*/
    this.apiService.ajoutManager(this.creerForm.value)
    .subscribe(data => {
      this.router.navigate(['authentificationManager']);
    });
     }


}
