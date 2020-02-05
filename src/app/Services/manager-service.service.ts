import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../Classes/Manager';
import { Observable, from } from 'rxjs/index';
import { ApiRest } from '../Classes/api-rest';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {
  baseUrl='http://localhost/Stage/';
  constructor(private http: HttpClient) { }

  login(loginData): Observable<ApiRest> {
    return this.http.post<ApiRest>(this.baseUrl + '/login1.php', loginData);
}
  getManager(): Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl+'/listManager.php');
    }

  getManagerById(id: number):Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl + '/getByIdManager.php?id=' + id);
  }
  getId(): Observable<ApiRest> {
    return this.http.get<ApiRest>(this.baseUrl + '/Id_Manager.php');
  }

  ajoutManager(manager:Manager):Observable<ApiRest>{
      return this.http.post<ApiRest>(this.baseUrl+'/insertManager.php',manager);
  }
  modifierManager(manager: Manager){
    return this.http.post<ApiRest>(this.baseUrl + '/updateManager.php',manager);
    window.location.reload();
  }

  supprimerManager(id: number):Observable<ApiRest> {
      return this.http.get<ApiRest>(this.baseUrl + '/deleteManager.php?id=' + id);
      window.localStorage.removeItem('token');
      window.location.reload();
  }
}
