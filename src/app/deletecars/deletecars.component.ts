import { Component, OnInit } from '@angular/core';
import {CARS} from "../CARS";

@Component({
  selector: 'app-deletecars',
  templateUrl: './deletecars.component.html',
  styleUrls: ['./deletecars.component.css']
})
export class DeletecarsComponent implements OnInit {
   ca=CARS
  constructor() { }

  ngOnInit(): void {
  }
 delete(){
     this.ca.pop()
 }
}
