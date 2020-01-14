import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification-manager',
  templateUrl: './authentification-manager.component.html',
  styleUrls: ['./authentification-manager.component.css']
})
export class AuthentificationManagerComponent implements OnInit {

  userName:string="admin";
  password:string="admin";
  erreur="";
  constructor() { }

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

}
