import { Component, OnInit } from '@angular/core';
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
    this.service.getPlanets().subscribe((data) => {
      data.planet.map((e: any) => {
        this.planets.push(
          {
            id     : e._id,
            image  : e.image,
            name   : e.Name,
            resume : e.description.substring(1,140)+'...'
          }
        )
      })
    });
  }  
}

