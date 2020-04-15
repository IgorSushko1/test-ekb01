import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWithCarsComponent } from './panel-with-cars.component';

describe('PanelWithCarsComponent', () => {
  let component: PanelWithCarsComponent;
  let fixture: ComponentFixture<PanelWithCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelWithCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelWithCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
