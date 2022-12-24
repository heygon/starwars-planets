import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from './star-wars/planet-detail/planet-detail.component';
import { PlanetsComponent } from './star-wars/planets/planets.component';

const routes: Routes = [
  {path : '', component : PlanetsComponent},
  {path : 'planet-detail/:id', component : PlanetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


