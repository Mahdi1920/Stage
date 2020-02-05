import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Classes/Clients';
import { Observable, from } from 'rxjs/index';
import { ApiRest } from '../Classes/api-rest';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl='http://localhost/Stage/';
  constructor(private http: HttpClient) { }

  /*login(loginData): Observable<ApiRest> {
    return this.http.post<ApiRest>(this.baseUrl + '/login1.php', loginData);
}*/
  getClients(): Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl+'/listClients.php');
    }

    getClientById(id: number):Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl + '/getByIdClient.php?id=' + id);
  }

  ajoutClient(client:Client):Observable<ApiRest>{
      return this.http.post<ApiRest>(this.baseUrl+'/insertClient.php',client);
  }
  modifierClient(client:Client){
    return this.http.post<ApiRest>(this.baseUrl + '/updateClient.php',client);
  }

  supprimerClient(id: number):Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl + '/deleteClient.php?id=' + id);
      window.location.reload();
  }
}
