import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  Pinterests:any=[]
    constructor(private _Pinterest:PinterestService )
    {
      _Pinterest.getPinterest().subscribe(
        (data:any)=>{
          console.log(data)
          this.Pinterests=data
        },
        (err:any)=>{
          alert("this is error");
        }
      )
    }

}
