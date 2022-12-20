import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './../planets.service';



@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent {
  

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

  static getDetails(id : string){
    console.log(id)
  }

}
