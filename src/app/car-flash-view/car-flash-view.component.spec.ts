import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFlashViewComponent } from './car-flash-view.component';

describe('CarFlashViewComponent', () => {
  let component: CarFlashViewComponent;
  let fixture: ComponentFixture<CarFlashViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFlashViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFlashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
