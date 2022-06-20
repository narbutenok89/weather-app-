import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourluWeatherComponent } from './hourlu-weather.component';

describe('HourluWeatherComponent', () => {
  let component: HourluWeatherComponent;
  let fixture: ComponentFixture<HourluWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourluWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourluWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
