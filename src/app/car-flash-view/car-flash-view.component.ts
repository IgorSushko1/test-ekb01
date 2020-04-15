import { Component, OnInit, Input } from '@angular/core';

import { Cars } from '../cars.interface';

@Component({
  selector: 'app-car-flash-view',
  templateUrl: './car-flash-view.component.html',
  styleUrls: ['./car-flash-view.component.scss']
})
export class CarFlashViewComponent implements OnInit {

  cars: Cars[] = [
    {
      brand: 'BMW',
      model: '1 серии',
      url: '../assets/bmw 1series.jpg',
      amount: 1,
      minPrice: '1 670 000 ₽',
      engineVolume: 1.1,
      horsePower: 120,
      transmission: 'АКПП',
      drivingVeels: 'передний',
      drivingScheme: '4x2',
      gears: 8,
      fuelType: 'дизель'
    },
    {
      brand: 'BMW',
      model: '3 серии',
      url: '../../assets/bmw 3series.jpg',
      amount: 126,
      minPrice: '1 940 000 ₽',
      engineVolume: 2.0,
      horsePower: 180,
      transmission: 'АКПП',
      drivingVeels: 'полный',
      drivingScheme: '4x4',
      gears: 7,
      fuelType: 'бензин'
    },
    {
      brand: 'BMW',
      model: 'x2',
      url: '../../assets/bmw x2.jpg',
      amount: 1,
      minPrice: '2 320 000 ₽',
      engineVolume: 3.0,
      horsePower: 240,
      transmission: 'АКПП',
      drivingVeels: 'полный',
      drivingScheme: '4x4',
      gears: 7,
      fuelType: 'бензин'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
