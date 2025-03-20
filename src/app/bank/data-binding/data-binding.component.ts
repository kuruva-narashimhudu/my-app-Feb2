import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
// event binding
click(){
  alert("halooo!");
}
submit(){
  alert("submit "+this.mobile);
}




// Interpolation
age:number=20;
name:string="sai";
// Property Binding
isdata:boolean=true;
// Two way data binding
mobile:string='+91';


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
