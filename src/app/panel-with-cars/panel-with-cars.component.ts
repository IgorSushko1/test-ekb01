import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Cars } from '../cars.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panel-with-cars',
  templateUrl: './panel-with-cars.component.html',
  styleUrls: ['./panel-with-cars.component.scss']
})
export class PanelWithCarsComponent implements OnInit {

  // cars: Cars[];
  // cars: Observable<Cars[]>;


  constructor(
    private carsService: CarsService,
  ) { }

  // getCars(): void {
  // this.carsService.getCars().subscribe(car => this.cars = car);

  // this.cars = this.carsService.getCars();
  // console.log(`вывел же параметры ` + this.cars);

  // }

  ngOnInit() {
    // this.getCars();
    // console.log(this.cars);

  }

}
