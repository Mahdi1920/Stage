import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-authentification-employee',
  templateUrl: './authentification-employee.component.html',
  styleUrls: ['./authentification-employee.component.css']
})
export class AuthentificationEmployeeComponent implements OnInit {
  compteForm: FormGroup
  userName:string="admin";
  password:string="admin";
  erreur="";
  constructor(private router:Router ,private formBuilder:FormBuilder) { }

  verif (userN,pass)
  {
    if(userN!=this.userName)
    {
      this.erreur="user";
    }
    else if((userN=this.userName)&&(pass!=this.password))
    {
      this.erreur="password";
    }
    else if((userN=this.userName)&&(pass=this.password))
    {
      this.erreur="correct";
    }
  }
  ngOnInit() {
  }

  onAjout()
  {
    console.log(this.compteForm.value);     
    console.log(this.compteForm.value['nom']);     
    console.log(this.compteForm.get('email').value);   
    console.log(this.compteForm.value['tel']); 
    console.log(this.compteForm.value['genre']);  
      
  }
}
