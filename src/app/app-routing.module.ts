import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { AboutComponent } from './comps/about/about.component';
import { VehiclesComponent } from './comps/vehicles/vehicles.component';
import { VehicleDetailComponent } from './comps/vehicles/vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'vehicles', component: VehiclesComponent},
  { path: 'vehicle/:id', component: VehicleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
