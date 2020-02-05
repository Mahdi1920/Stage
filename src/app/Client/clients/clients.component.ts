import { Component, OnInit } from '@angular/core';
import { Client} from '../../Classes/Clients';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ClientsService } from '../../Services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  token: string;
  clients: Client[];
  mySubscription: any;

  constructor(private apiService: ClientsService, private router:Router , private routes : ActivatedRoute ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
   }

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.id);
    
       this.apiService.getClients()
      .subscribe( (data : any) => {
          this.clients = data;
          console.log(this.clients);
      });
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['authentificationManager']);
  }
  }
  edit(client: Client): void {
    this.router.navigate(['modifierClient', + client.id_client]);
  }

      supprimer(id: number): void{
        console.log(id);
    this.apiService.supprimerClient(id)
    .subscribe( ()  => {
        this.router.navigate(['client']);
      });
  }
}
