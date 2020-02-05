import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.css']
})
export class ErreurComponent implements OnInit {
  token: string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['authentificationManager']);
  }
  }

}
