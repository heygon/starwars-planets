import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanetsService {

  api = "http://localhost:3005";

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(this.api+'/planet/list');
  }
  getPlanetsDetail(id:String): Observable<any> {
    return this.http.get(this.api+'/planet/'+id);
  }

}