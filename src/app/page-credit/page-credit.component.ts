import { Component, OnInit, Input } from '@angular/core';
import { Cars } from '../cars.interface';
import { CarsService } from '../cars.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-credit',
  templateUrl: './page-credit.component.html',
  styleUrls: ['./page-credit.component.scss']
})
export class PageCreditComponent implements OnInit {

  car: Cars;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`id передается правильно?` + id);

    this.carsService.getCar(id)
      .subscribe(car => this.car = car);
  }

  ngOnInit(): void {
    this.getCar();
    console.log(`Получить this.car ===` + this.car);
    console.log(this.car);

    console.log(`Получить this.car.minPrice ===` + this.car.minPrice);
  }

}
