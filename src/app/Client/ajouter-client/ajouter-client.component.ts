import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { ClientsService } from '../../Services/clients.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  token: string;
  ajoutForm: FormGroup;
  

  constructor( private router:Router ,private formBuilder:FormBuilder , private apiService:ClientsService) { }


  ngOnInit() {
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['authentificationManager']);
  }
  this.ajoutForm = this.formBuilder.group(       
    {id:[],
    nom:['',Validators.required],      
    email: ['',Validators.required], 
    adresse:['',Validators.required], 
    telephone:['',Validators.required],}) 
  }
  onAjout() {     
    console.log(this.ajoutForm.value);
    /*console.log(this.ajoutForm.value['nom']);        
    console.log(this.ajoutForm.get('email').value); 
    console.log(this.ajoutForm.value['adresse']); 
    console.log(this.ajoutForm.value['telephone']);  */
    this.apiService.ajoutClient(this.ajoutForm.value)
    .subscribe(data => {
      this.router.navigate(['client']);
    });
     }
     public get nom() { return this.ajoutForm.controls.nom; }
     public get email() { return this.ajoutForm.controls.email; }
     public get adresse() { return this.ajoutForm.controls.adresse; }
     public get telephone() { return this.ajoutForm.controls.telephone; }
}
