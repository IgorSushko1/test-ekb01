import { Component, OnInit } from '@angular/core';
import { CarFlashViewComponent } from '../car-flash-view/car-flash-view.component';
import { CarsService } from '../cars.service';
import { Cars } from '../cars.interface';

@Component({
  selector: 'app-panel-with-cars',
  templateUrl: './panel-with-cars.component.html',
  styleUrls: ['./panel-with-cars.component.scss']
})
export class PanelWithCarsComponent implements OnInit {

  cars: Cars[];

  constructor(private carsService: CarsService) { }

  getCars(): void {
    this.cars = this.carsService.getCars();
  }

  ngOnInit(): void {
  }

}
