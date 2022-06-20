import { Component, Input, OnInit } from '@angular/core';
import { IHourluDetails } from 'src/app/shared/model/weather-app.module';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
  selector: 'app-hourlu-weather',
  templateUrl: './hourlu-weather.component.html',
  styleUrls: ['./hourlu-weather.component.scss']
})
export class HourluWeatherComponent implements OnInit {

  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() hourluDetails!: IHourluDetails[];
  hourluDetail!: IHourluDetails;
  hourluDetailsOneDay: IHourluDetails[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnChanges(): void{
    this.getHourlyWeather();
  }

  ngOnInit(): void {
  }

  getHourlyWeather(){
    this.hourluDetailsOneDay = [];
    for(let i = 0; i < this.hourluDetails.length; i++ ){
      let date_txt = this.hourluDetails[0].dt_txt.slice(0,10);
      if(this.hourluDetails[i].dt_txt.includes(date_txt)){
        this.hourluDetailsOneDay.push(this.hourluDetails[i]);
      }
    }
  }
}


