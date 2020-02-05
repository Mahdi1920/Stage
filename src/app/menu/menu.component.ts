import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ManagerServiceService } from '../Services/manager-service.service';
import { Manager } from '../Classes/Manager';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  token: any;
managers:Manager[];
id:any;
  constructor(private router:Router, private routes : ActivatedRoute, private apiService:ManagerServiceService) { }

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.id);
    this.apiService.getId()
    .subscribe( (id : any) => {
        this.id = id;
        console.log(this.id);
    });
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['authentificationManager']);
  }
}


  logOut(){
    window.localStorage.removeItem('token');
    this.router.navigate(['authentificationManager']);
   }
}
