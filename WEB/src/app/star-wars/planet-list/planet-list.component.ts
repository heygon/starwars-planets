import { Component, OnInit } from '@angular/core';
import { PlanetDetailComponent } from "../planet-detail/planet-detail.component";
import { PlanetsService } from "../planets.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent  {

  constructor(
    private service : PlanetsService
  ) {}

  public planets = Array();

  ngOnInit(): void {


    //PlanetsService.

    this.service.getPlanets().subscribe((data) => {
      console.log(data.planet);
      
      data.planet.map((e: any) => {
        this.planets.push(
          {
            id     : e.id,
            image  : e.image,
            name   : e.name,
            resume : e.resume            
          }
        )
      })
      

    });
    

    /* this.getPlanets().subscribe((planets: any) => {
      console.log(planets);
    }); */

    


  }

  planetDetail(id : string){
    console.log(id)
    PlanetDetailComponent.getDetails(id);
  }
  
}

