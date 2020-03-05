import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employe} from '../Classes/Employe';
import { Observable, } from 'rxjs/index';
import { ApiRest } from '../Classes/api-rest';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 employe:Employe[];
  constructor(private http: HttpClient) { }
  baseUrl='http://localhost/Stage/';
  

  
  getEmployes(): Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl+'/listEmploye.php');
    }

  getEmployeById(id: number):Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl + '/getByIdEmploye.php?id=' + id);
  }

  ajoutEmploye(employe:Employe):Observable<ApiRest>{
      return this.http.post<ApiRest>(this.baseUrl+'/insertEmploye.php',employe);
  }
  modifierEmploye(employe: Employe){
    return this.http.post<ApiRest>(this.baseUrl + '/updateEmploye.php',employe);
    window.location.reload();
  }

  supprimerEmploye(id: number):Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl + '/deleteEmploye.php?id=' + id);
      window.location.reload();
  }


  

}


