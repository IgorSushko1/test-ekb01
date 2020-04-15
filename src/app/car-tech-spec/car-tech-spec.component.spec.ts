import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTechSpecComponent } from './car-tech-spec.component';

describe('CarTechSpecComponent', () => {
  let component: CarTechSpecComponent;
  let fixture: ComponentFixture<CarTechSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTechSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTechSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
