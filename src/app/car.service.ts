import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './Car';
import { CARS } from './CARS';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Car[]> {
    return of(CARS);
  }

  getCar(id:number) : Observable<Car> {
    const car = CARS.find(x => x.id === id)!;
    return of(car);
  }

  removeCar(car: Car): Observable<Car> {
    CARS.splice(CARS.indexOf(car), 1);
    return of(car);
  }


}
