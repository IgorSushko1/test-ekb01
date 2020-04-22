import { Component, OnInit, Input } from '@angular/core';

import { Cars } from '../cars.interface';

import { CarsService } from '../cars.service';

@Component({
  selector: 'app-page-credit',
  templateUrl: './page-credit.component.html',
  styleUrls: ['./page-credit.component.scss']
})
export class PageCreditComponent implements OnInit {
  /* здесь нужен код, который принимает определеннное значение, указывающее на опредленный автомобиль,
   для построения расчета кредита */

  @Input() sended: Cars[];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    console.log(`получение массива`, this.sended)
  }

}
