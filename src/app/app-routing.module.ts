import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsComponent } from './cars/cars.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { TopcarsComponent } from './topcars/topcars.component';
import {AddcarsComponent} from "./addcars/addcars.component";
import {DeletecarsComponent} from "./deletecars/deletecars.component";

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'topcars', component: TopcarsComponent},
  {path: '', redirectTo: '/topcars', pathMatch: 'full'},
  {path: 'info/:id', component: CarDetailComponent},
  {path: 'currencies', component: CurrenciesComponent},
  {path: 'addcars', component:AddcarsComponent},
  {path: 'deletecars' , component:DeletecarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
