import { Component, OnInit, Input } from '@angular/core';

import { Cars } from '../cars.interface';

@Component({
  selector: 'app-page-credit',
  templateUrl: './page-credit.component.html',
  styleUrls: ['./page-credit.component.scss']
})
export class PageCreditComponent implements OnInit {

  @Input() sended: Cars[];

  constructor() { }

  ngOnInit(): void {
    console.log(`получение массива`, this.sended)
  }

}
