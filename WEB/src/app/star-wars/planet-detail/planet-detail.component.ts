import { Component, OnInit } from '@angular/core';
import { PlanetsService } from "../planets.service";

/* interface planet  {
  name: "",
  rotation_period: "",
  orbital_period: "",
  diameter: "",
  climate: "",
  gravity: "",
  terrain: "",
  surface_water: "",
  population: "",
  image: "",
  description: "",
} */

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent {
  

  constructor(
    private service : PlanetsService
  ) {}
  
  public planet=  {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    image: "",
    description: "",
  };
 

  
  ngOnInit(): void {
    let getid = [];
    getid = window.location.href.split('/');
    let id:string = getid[ getid.length -1 ]
    console.log(id)
    this.service.getPlanetsDetail(id).subscribe((data : any) => {
      
      this.planet = {
        name: data.planet.Name,
        rotation_period: data.planet.rotation_period,
        orbital_period: data.planet.orbital_period,
        diameter: data.planet.diameter,
        climate: data.planet.climate,
        gravity: data.planet.gravity,
        terrain: data.planet.terrain,
        surface_water: data.planet.surface_water,
        population: data.planet.population,
        image: data.planet.image,
        description: data.planet.description
      }

      console.log(this.planet);
      return this.planet;
      
    });

  }

}
