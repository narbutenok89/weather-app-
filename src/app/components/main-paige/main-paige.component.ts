import { Component, Input, OnInit } from '@angular/core';
import { IData, IHourluDetails } from 'src/app/shared/model/weather-app.module';

@Component({
  selector: 'app-main-paige',
  templateUrl: './main-paige.component.html',
  styleUrls: ['./main-paige.component.scss', ]
})
export class MainPaigeComponent implements OnInit {

  @Input() inputValue!: string;

  city: string = this.inputValue;

  @Input() timeDuration!: string;
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() data!: IData;
  @Input() hourluDetails!: IHourluDetails[];
  @Input() isErrorShow!: boolean;
  @Input() isPageShow!: boolean;

  isShowTodayPage: boolean = true;
  isShowFiveTodayPage: boolean = false;
  activeItem!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showInfoTodayWeather(): void {
    this.isShowTodayPage = true;
    this.isShowFiveTodayPage = false;
  }

  showInfoFiveDayWeather(): void {
    this.isShowTodayPage = false;
    this.isShowFiveTodayPage = true;
  }
}
