import { Component } from '@angular/core';
import { ForecastService } from '../../services/forecast/forecast.service';
import { WeatherForecastModel } from '../../model/WeatherForecastModel'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent{

  weatherForecast: WeatherForecastModel[] = [];
  city:string = "";

constructor(private forecastService : ForecastService){

}


getForecast() {
  this.forecastService.getForecast(this.city).subscribe(Response => {
    console.log(Response);
    this.weatherForecast = Response;
  });
}

}
