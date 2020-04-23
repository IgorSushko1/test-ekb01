import { Component, OnInit, Input } from '@angular/core';
import { Cars } from '../cars.interface';


@Component({
  selector: 'app-car-tech-spec',
  templateUrl: './car-tech-spec.component.html',
  styleUrls: ['./car-tech-spec.component.scss']
})
export class CarTechSpecComponent implements OnInit {

  @Input() car: Cars;

  carMinPrice: string;

  constructor() { }

  ngOnInit(): void {
    this.carMinPrice = this.car.minPrice.toLocaleString('ru-RU');
  }

}
