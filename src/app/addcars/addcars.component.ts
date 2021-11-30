import { Component, OnInit } from '@angular/core';
import {Car} from "../Car";
import {CARS} from "../CARS";

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {
  cars1 = CARS
  private carService: any;
  constructor() { }

  ngOnInit(): void {

  }

add(){
    this.cars1.push({id:234,title:'Volvo',model:'345'})
}
}
