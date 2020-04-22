import { Component } from '@angular/core';
import { Cars } from './cars.interface';

import { cars } from './cars';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ekb01';
  cars = cars;
  sliderValue: number;
}
