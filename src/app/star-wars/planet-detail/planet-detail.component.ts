import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './../planets.service';



@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent {
  static getDetails(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  
  planet = {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    residents: "",
    films: "",
    created: "",
    edited: "",
    url: "",
    image: "",
    description: ""
  }

  ngOnInit(): void {

  }

  getDetails(id : string){
    console.log(id)
  }

}
