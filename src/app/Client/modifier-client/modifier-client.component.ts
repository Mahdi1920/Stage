import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from '../../Services/clients.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {
  token: string;
  ajoutForm : FormGroup;

  constructor(private router:Router , private apiService:ClientsService , private formBuilder:FormBuilder ,private routes : ActivatedRoute) { }

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
      email: [''], 
      adresse:[''],
      telephone:[''] }) ;
  
      this.apiService.getClientById(routeParams.id).subscribe((data: any) => {
        console.log(data)
        this.ajoutForm.patchValue(data);
    });
  

}
onModifier(){
  this.apiService.modifierClient(this.ajoutForm.value).subscribe(() => {
    this.router.navigate(['client']);
  },
    error => {
      alert(error);
    });
}
}
