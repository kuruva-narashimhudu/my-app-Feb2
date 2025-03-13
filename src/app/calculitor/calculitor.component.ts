import { Component } from '@angular/core';

@Component({
  selector: 'app-calculitor',
  templateUrl: './calculitor.component.html',
  styleUrls: ['./calculitor.component.css']
})
export class CalculitorComponent {
  num1:number=0;
  num2:number=0;
  result:number=0;
  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1+this.num2;
    console.log(this.result);
  }
  sub(){
    console.log(this.num1,this.num2);
    this.result=this.num1-this.num2;
    console.log(this.result);
  }
  mul(){
    console.log(this.num1,this.num2);
    this.result=this.num1*this.num2;
    console.log(this.result);
  }
  div(){
    console.log(this.num1,this.num2);
    this.result=this.num1/this.num2;
    console.log(this.result);
  }

}
