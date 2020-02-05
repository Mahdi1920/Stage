import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../../Services/employees.service';

@Component({
  selector: 'app-modifier-employer',
  templateUrl: './modifier-employer.component.html',
  styleUrls: ['./modifier-employer.component.css']
})
export class ModifierEmployerComponent implements OnInit {
  ajoutForm: FormGroup;
  token: string;
  //id:number;
  constructor(private router:Router ,private formBuilder:FormBuilder ,private routes : ActivatedRoute , private apiService:EmployeesService) { }

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
    adresse:[''], 
    naissance:[''],
    telephone:[''],
    genre:[''],       
    poste:[''],      
    salaire:[] }) ;

    this.apiService.getEmployeById(routeParams.id).subscribe((data: any) => {
      console.log(data)
      this.ajoutForm.patchValue(data);
  });

}

onModifier(){
  this.apiService.modifierEmploye(this.ajoutForm.value).subscribe(() => {
    //this.router.navigate(['Employee']);
  },
    error => {
      alert(error);
    });
}
}