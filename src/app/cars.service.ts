import { Injectable } from '@angular/core';
import { Cars } from './cars.interface';
import { cars } from './cars';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {


  constructor() { }

  getCars(): Observable<Cars[]> {
    return of(cars);
  }

  getCar(id: number): Observable<Cars> {
    return of(cars.find(car => car.id === id))
  }
}
