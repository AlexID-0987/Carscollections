import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../Car';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car?: Car;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id)
          .subscribe(car => this.car = car);
  }

  goBack() {
    this.location.back();
  }
}
