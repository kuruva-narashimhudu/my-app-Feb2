import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[]
  constructor(private _vehicle: VehicleService)
  {
    _vehicle.getVehicle().subscribe(
      (data:any)=>{
        console.log(data)
        this.vehicles=data
      },
      (err:any)=>{
        alert("wrong api");
      }
    )
  

  }
 

}
