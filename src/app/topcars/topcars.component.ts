import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-topcars',
  templateUrl: './topcars.component.html',
  styleUrls: ['./topcars.component.css']
})
export class TopcarsComponent implements OnInit {

  cars: Car[] = []

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
            .subscribe(cars => this.cars = cars.slice(1,4));
  }

}
