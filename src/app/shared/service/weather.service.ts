import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IAllDetails, IData } from '../model/weather-app.module';

const URL_API = 'https://api.openweathermap.org';
const API_KEY = '9cfde8b0594e12d64479f78716d10d5c';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  inputValue!: string;
  city: string = this.inputValue;

  @Input() latitude!: number;
  @Input() longitude!: number;
  // error:string = ""
  isErrorShow:boolean = false;
  isPageShow:boolean = true;

  constructor(private http: HttpClient) { }

  getCurrentWeatherToday(city: string): Observable<IData> {
    return this.http.get<IData>(`${URL_API}/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    // .pipe(
    //   catchError(error => {
    //     console.log(error.message);
    //     this.isErrorShow =!this.isErrorShow;
    //     this.isPageShow = !this.isPageShow;
    //     console.log(this.isErrorShow);
    //     return throwError(error);
    //   })
    // )
  }

  getHourluWeatherToday(latitude:number, longitude:number): Observable<IAllDetails> {
    return this.http.get<IAllDetails>(`${URL_API}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
  }

}
