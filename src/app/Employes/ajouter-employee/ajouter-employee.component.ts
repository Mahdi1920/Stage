import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { EmployeesService } from '../../Services/employees.service';

@Component({
  selector: 'app-ajouter-employee',
  templateUrl: './ajouter-employee.component.html',
  styleUrls: ['./ajouter-employee.component.css']
})
export class AjouterEmployeeComponent implements OnInit {
  ajoutForm: FormGroup;
  token: any;

  constructor(private router:Router ,private formBuilder:FormBuilder , private apiService:EmployeesService ) { }

  ngOnInit() {
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['authentificationManager']);
  }
    this.ajoutForm = this.formBuilder.group(       
      {id:[],
      nom:['',Validators.required , ],
      prenom:['',Validators.required ],       
      email: ['',Validators.required ], 
      adresse:['',Validators.required ], 
      naissance:['',Validators.required],
      telephone:['',Validators.required ],
      genre:['',Validators.required],       
      poste:['',Validators.required],      
      salaire:['',Validators.required ] }) 

  }

  public get nom() { return this.ajoutForm.controls.nom; }
  public get prenom() { return this.ajoutForm.controls.prenom; }
  public get email() { return this.ajoutForm.controls.email; }
  public get telephone() { return this.ajoutForm.controls.telephone; }
  public get salaire() { return this.ajoutForm.controls.salaire; }
  public get poste() { return this.ajoutForm.controls.poste; }



  onAjout() {     
    console.log(this.ajoutForm.value);
    /*console.log(this.ajoutForm.value['nom']);     
    console.log(this.ajoutForm.value['prenom']);     
    console.log(this.ajoutForm.get('email').value); 
    console.log(this.ajoutForm.value['adresse']); 
    console.log(this.ajoutForm.value['naissance']);  
    console.log(this.ajoutForm.value['telephone']);              
    console.log(this.ajoutForm.value['genre']);    
    console.log(this.ajoutForm.value['poste']);     
    console.log(this.ajoutForm.value['salaire']);*/
    this.apiService.ajoutEmploye(this.ajoutForm.value)
    .subscribe(data => {
      this.router.navigate(['Employee']);
    });
     }

     logOut(){
      window.localStorage.removeItem('token');
      this.router.navigate(['authentificationEmployee']);
     }
}
