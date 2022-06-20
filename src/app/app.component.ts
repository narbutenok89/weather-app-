import { Component, Input } from '@angular/core';
import { IData, IAllDetails, IHourluDetails } from './shared/model/weather-app.module';
import { WeatherService } from './shared/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputValue!: string;
  data!: IData;
  timeDuration!: string;
  latitude!: number;
  longitude!: number;
  allDetails!: IAllDetails;
  hourluDetails!: IHourluDetails[];
  error = "";
  isErrorShow: boolean = false;
  isPageShow: boolean = true;


  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.inputValue = "Riga";
    this.getWeatherCurrent(this.inputValue);
  }

  getWeatherCurrent(inputValue: string): void {
    this.isErrorShow = false;
    this.weatherService.getCurrentWeatherToday(this.inputValue).subscribe((data: IData) => {

      this.data = data;
      this.timeDuration = ((data.sys.sunset*1000) - (data.sys.sunrise*1000)).toFixed(2);
      this.latitude = data.coord.lat;
      this.longitude = data.coord.lon;
      // console.log(this.data);
      // console.log(this.inputValue);

      this.weatherService.getHourluWeatherToday(this.latitude, this.longitude).subscribe((allDetails: IAllDetails) => {
        this.allDetails = allDetails;
        this.hourluDetails = this.allDetails.list;
      })
    }, error => {
        console.log(error.message);
        this.isErrorShow = !this.isErrorShow;
        this.isPageShow = !this.isPageShow;
    })
  }
}
