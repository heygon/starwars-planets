import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanetsService {

  //planetApiUrl = 'https://swapi.dev/api/planets';
  planetApiUrl = 'https://akabab.github.io/starwars-api/api/all.json';
  planetApiUrlDetails = 'https://private-anon-b97bf46abd-starhub.apiary-mock.com/api/planets/';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(this.planetApiUrl);
  }
  getPlanetsDetail(name:String): Observable<any> {
    return this.http.get(this.planetApiUrlDetails+''+name);
  }

}