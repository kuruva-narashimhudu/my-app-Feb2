import { Component } from '@angular/core';

@Component({
  selector: 'app-intrest',
  templateUrl: './intrest.component.html',
  styleUrls: ['./intrest.component.css']
})
export class IntrestComponent {
  num1:number=0;
num2:number=0;
num3:number=0;

result:number=0;
emi(){
this.result=(this.num1*this.num2*this.num3)/100;
}


}
