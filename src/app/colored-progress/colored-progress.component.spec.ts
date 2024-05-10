import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredProgressComponent } from './colored-progress.component';

describe('ColoredProgressComponent', () => {
  let component: ColoredProgressComponent;
  let fixture: ComponentFixture<ColoredProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
