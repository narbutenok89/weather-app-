import { Component, Input, OnInit } from '@angular/core';
import { IData, IHourluDetails } from 'src/app/shared/model/weather-app.module';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})

export class WeatherTodayComponent implements OnInit {

  @Input() data!: IData;
  @Input() city!: string;
  @Input() hourluDetails!: IHourluDetails[];

  dateToday = Date.now();

  @Input() timeDuration!: string;

  @Input() latitude!: number;
  @Input() longitude!: number;

  constructor() { }

  ngOnInit(): void {

  }

}

