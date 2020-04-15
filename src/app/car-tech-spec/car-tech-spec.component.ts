import { Component, OnInit, Input } from '@angular/core';
import { Cars } from '../cars.interface';


@Component({
  selector: 'app-car-tech-spec',
  templateUrl: './car-tech-spec.component.html',
  styleUrls: ['./car-tech-spec.component.scss']
})
export class CarTechSpecComponent implements OnInit {

  @Input() sended: Cars[];

  car = this.sended;

  constructor() { }



  log() {
    // console.log(this.carsFromParent);
  }


  ngOnInit(): void {
    // this.log()
  }

}
