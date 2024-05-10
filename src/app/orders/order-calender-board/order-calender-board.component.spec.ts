import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCalenderBoardComponent } from './order-calender-board.component';

describe('OrderCalenderBoardComponent', () => {
  let component: OrderCalenderBoardComponent;
  let fixture: ComponentFixture<OrderCalenderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCalenderBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCalenderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
