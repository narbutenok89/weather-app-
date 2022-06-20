import { Component, Input, OnInit } from '@angular/core';
import { IHourluDetails } from 'src/app/shared/model/weather-app.module';

@Component({
  selector: 'app-hourly-five-days',
  templateUrl: './hourly-five-days.component.html',
  styleUrls: ['./hourly-five-days.component.scss']
})

export class HourlyFiveDaysComponent implements OnInit {

  @Input() hourluDetailsOneDay: IHourluDetails[] = [];
  item!: IHourluDetails;

  data_tx:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
