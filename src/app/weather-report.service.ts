import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {

  constructor( private _httpclient:HttpClient) { }
  getweatherReport():Observable<any>{
    return this._httpclient.get("https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true")
  }
}
