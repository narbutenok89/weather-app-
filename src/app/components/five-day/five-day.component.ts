import { Component, Input, OnInit } from '@angular/core';
import { IHourluDetails } from 'src/app/shared/model/weather-app.module';

@Component({
  selector: 'app-five-day',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.scss']
})
export class FiveDayComponent implements OnInit {

  @Input() hourluDetails!: IHourluDetails[];
  weatherFiveDays: IHourluDetails[] = [];
  weatherFiveDay!: IHourluDetails;
  weatherTonightDay!: IHourluDetails;
  data_tx!: string;
  hourluDetailsOneDay: IHourluDetails[] = [];
  hourluDetailsDayToday: IHourluDetails[] = [];
  selectedItem!:IHourluDetails;

  constructor() { }

  ngOnChanges(): void{
    this.getDayWeather();
    this.showWeatherOneDay(this.hourluDetails[0].dt_txt, this.hourluDetails[0]);
  }

  ngOnInit(): void {
  }

  getDayWeather(){
    for(let i = 0; i<this.hourluDetails.length; i++){
      if(this.hourluDetails[i].dt_txt.includes("00:00:00")){
        this.weatherTonightDay = this.hourluDetails[i];
        break;
      }
    }

    for(let i=0; i< this.hourluDetails.length; i++){
      let deita = Date.parse(this.hourluDetails[i].dt_txt);
      let date_txt = this.hourluDetails[0].dt_txt.slice(0,10);
      if(new Date(deita).getUTCDate() != new Date().getUTCDate() && this.hourluDetails[i].dt_txt.includes("15:00:00")){
        this.weatherFiveDays.push(this.hourluDetails[i]);
      } else if(this.hourluDetails[i].dt_txt.includes(date_txt)){
        this.hourluDetailsDayToday.push(this.hourluDetails[i]);
      }
    }
    if(this.weatherFiveDays.length = 5){
      this.weatherFiveDays.pop();
    }
  }

  showWeatherOneDay(data_tx:string, selectedItem:any): void{
    this.hourluDetailsOneDay = [];
    this.data_tx = data_tx;
    let abc = this.data_tx.slice(0,10)

    for(let i = 0; i < this.hourluDetails.length; i++ ){
      if(this.hourluDetails[i].dt_txt.includes(abc)){
        this.hourluDetailsOneDay.push(this.hourluDetails[i]);
      }
    }
    this.selectedItem = selectedItem;
  }
}
