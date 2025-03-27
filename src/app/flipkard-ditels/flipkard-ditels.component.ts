import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';
import { FlipkartDitelsService } from '../flipkart-ditels.service';

@Component({
  selector: 'app-flipkard-ditels',
  templateUrl: './flipkard-ditels.component.html',
  styleUrls: ['./flipkard-ditels.component.css']
})
export class FlipkardDitelsComponent {
  FlipkardDitels:any=[]
rating: any;
    constructor(private _flipkart: FlipkartDitelsService)
    {
      _flipkart.getFlipkartDitels().subscribe(
        (data:any)=>{
          console.log(data)
          this.FlipkardDitels=data
        },
        (err:any)=>{
          alert("wrong api");
        }
      )
    }

}
