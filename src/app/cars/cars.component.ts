import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  visible: boolean = true;
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }



  changeVisibility() {
    this.visible = !this.visible;
  }

  getCars() {
    // this.cars = this.carService.getCars();
    this.carService.getCars()
          .subscribe(cars => this.cars = cars);
  }

  removeCar(car: Car) {
    this.carService.removeCar(car)
            .subscribe(car => {
              this.getCars();
            });
  }
  add(){
    this.cars.push({id:234,title:'Volvo',model:'345'})
  }
}
