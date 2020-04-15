import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreditComponent } from './page-credit.component';

describe('PageCreditComponent', () => {
  let component: PageCreditComponent;
  let fixture: ComponentFixture<PageCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
