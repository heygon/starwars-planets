import { Component, OnInit } from '@angular/core';
import { PlanetDetailComponent } from "../planet-detail/planet-detail.component";
import { PlanetsService } from "../planets.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent  {

  constructor() {}

  public planets = [
    {
      id     : '1',
      image  : '../../../assets/img/Tatooine.webp',
      name   : 'Tatoine',
      resume : 'Tatooine was a desert world and the first planet in the binary Tatoo star system...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
    {
      id     : '2',
      image  : '../../../assets/img/kamino.webp',
      name   : 'Kamino',
      resume : 'Kamino also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet...'
      
    },
  ]

  ngOnInit(): void {


    this.getPlanets().subscribe((planets: any) => {
      console.log(planets);
    });



  }

  planetDetail(id : string){
    console.log(id)
    PlanetDetailComponent.getDetails(id);
  }
  

}
