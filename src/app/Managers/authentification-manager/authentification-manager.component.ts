import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../Services/employees.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { ManagerServiceService } from 'src/app/Services/manager-service.service';


@Component({
  selector: 'app-authentification-manager',
  templateUrl: './authentification-manager.component.html',
  styleUrls: ['./authentification-manager.component.css']
})
export class AuthentificationManagerComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  login: boolean;
  id: any;
  token: any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: ManagerServiceService) { }
   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
    if(!this.token){
      this.router.navigate(['authentificationManager']);
   }
   }

   onSubmit(){
     console.log(this.loginForm.value);
     if (this.loginForm.invalid) {
      return;
    }

     const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

     this.apiService.login(loginData).subscribe((data: any) => {
      this.id = data.id;
      this.message = data.message;
     // console.log(data.token);
      if(data.token) {
         this.login=true;
          window.localStorage.setItem('token', data.token);
          //alert( data.message);
          this.router.navigate(['Manager',+ this.id]);
       } else {
         this.invalidLogin = true;
        
       }
     });
 

   }
  }