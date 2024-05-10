import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredBadgeComponent } from './colored-badge.component';

describe('ColoredBadgeComponent', () => {
  let component: ColoredBadgeComponent;
  let fixture: ComponentFixture<ColoredBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
