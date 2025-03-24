import { Component } from '@angular/core';
import { WeatherReportService } from '../weather-report.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent {
  
  Temperature:number=29.2;
  windSpeed:number=8.2;
  windDirection:number=67;
  windCompass:string='';
  constructor(private _weatherReport:WeatherReportService){
    _weatherReport.getweatherReport().subscribe(
      (data:any)=>{
        this._weatherReport=data;
      },
      (err:any)=>{
        alert("error it")
      }
    )
  }
}
