import { Component, OnInit, Input } from '@angular/core';

import { Cars } from '../cars.interface';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-flash-view',
  templateUrl: './car-flash-view.component.html',
  styleUrls: ['./car-flash-view.component.scss']
})
export class CarFlashViewComponent implements OnInit {

  cars: Cars[];

  constructor(
    private carsService: CarsService,
  ) { }

  getCar(): void {
    this.carsService.getCars()
      .subscribe(car => this.cars = car)
  }

  ngOnInit(): void {
    this.getCar();
  }

}
