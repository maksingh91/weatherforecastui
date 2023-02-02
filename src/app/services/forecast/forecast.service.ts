import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  url : any;

  getForecast(city:string): Observable<any> {
    this.url = 'http://localhost:8080/forecast/'+city;
    return this.http.get(this.url);
  }
}
