import { Component, OnInit } from '@angular/core';
import { CarFlashViewComponent } from '../car-flash-view/car-flash-view.component';

@Component({
  selector: 'app-panel-with-cars',
  templateUrl: './panel-with-cars.component.html',
  styleUrls: ['./panel-with-cars.component.scss']
})
export class PanelWithCarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
