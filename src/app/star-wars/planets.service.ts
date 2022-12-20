import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanetsService {

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }
  getPlanetsDetail(name:String): Observable<any> {
    const planetApiUrl = 'https://private-anon-b97bf46abd-starhub.apiary-mock.com/api/planets/'+name;
    return this.http.get(planetApiUrl);
  }
}
