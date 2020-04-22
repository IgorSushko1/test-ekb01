import { Injectable } from '@angular/core';
import { Cars } from './cars.interface';
import { cars } from './cars';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars(): Cars[] {
    return cars;
  }
}
