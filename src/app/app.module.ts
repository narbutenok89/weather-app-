import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPaigeComponent } from './components/main-paige/main-paige.component';

import { FormsModule } from '@angular/forms';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HourluWeatherComponent } from './components/hourlu-weather/hourlu-weather.component';
import { FiveDayComponent } from './components/five-day/five-day.component';
import { HourlyFiveDaysComponent } from './components/hourly-five-days/hourly-five-days.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPaigeComponent,
    WeatherTodayComponent,
    HourluWeatherComponent,
    FiveDayComponent,
    HourlyFiveDaysComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
