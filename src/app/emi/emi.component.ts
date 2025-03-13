import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  
    num1:number=0;
    num2:number=0/12/100;
    num3:number=0;

    result:number=0;
    emi(){
 this.result=((this.num1*this.num2*(1+this.num2)^this.num3))/((1+this.num2)^(this.num3-1));
   }

}
