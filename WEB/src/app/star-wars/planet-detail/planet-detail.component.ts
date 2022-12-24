import { Component, OnInit } from '@angular/core';
import { PlanetsService } from "../planets.service";


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
    let id:any = window.location.href.split('/'); // Collect id from url
    id = id[id.length -1];
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
      return this.planet;
    });
  }
}
