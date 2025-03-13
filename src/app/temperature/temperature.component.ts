import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  num1:number=0;
  num2:number=0;
  num3:number=0;

  result:number=0;
  temperature(){
    this.result=(this.num1-32)*5/9;
  }
}