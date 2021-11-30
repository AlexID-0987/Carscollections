import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { FormsModule } from '@angular/forms';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { TopcarsComponent } from './topcars/topcars.component';
import { CurrenciesComponent } from './currencies/currencies.component'
import { HttpClientModule } from '@angular/common/http';
import { AddcarsComponent } from './addcars/addcars.component';
import { DeletecarsComponent } from './deletecars/deletecars.component';
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    TopcarsComponent,
    CurrenciesComponent,
    AddcarsComponent,
    DeletecarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
