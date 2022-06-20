import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyFiveDaysComponent } from './hourly-five-days.component';

describe('HourlyFiveDaysComponent', () => {
  let component: HourlyFiveDaysComponent;
  let fixture: ComponentFixture<HourlyFiveDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyFiveDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyFiveDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
