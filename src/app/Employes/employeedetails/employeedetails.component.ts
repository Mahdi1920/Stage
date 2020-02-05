import { Component, OnInit } from '@angular/core';
import { Employe } from '../../Classes/Employe';
import { EmployeesService } from '../../Services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employe: Employe;
  id: number;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  naissance: Date;
  telephone: number;
  poste: string;
  salaire: number;
  genre: string;
  token: string;
  ajoutForm: FormGroup;
  
  constructor(private router:Router,private apiService:EmployeesService ,private activatedRouter : ActivatedRoute , private routes : ActivatedRoute , private formBuilder:FormBuilder) { }

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
  console.log(routeParams.id);
      
  this.apiService.getEmployeById(routeParams.id)
  .subscribe( (data : any) => {
      this.employe = data;
      console.log(this.employe); });
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

  details(employe: Employe): void {
    this.apiService.getEmployeById(employe.id).subscribe(() => {
    this.router.navigate(['employeeDetails', + employe.id]);
  },
  error => {
    alert(error);
  });
}
}


