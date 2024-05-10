import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersColumnComponent } from './orders-column.component';

describe('OrdersColumnComponent', () => {
  let component: OrdersColumnComponent;
  let fixture: ComponentFixture<OrdersColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
