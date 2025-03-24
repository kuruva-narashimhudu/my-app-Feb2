import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleFrom:FormGroup =new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    const:new FormControl(),
    fuel:new FormControl(),

  })
  id:number=0;
  constructor(private _vehicleService:VehicleService,private _router:Router,private _ativatedRoute:ActivatedRoute){

    _ativatedRoute .params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(err:any)=>{
        alert("Internal Server Error")
      }

    )
    
    if(this.id){
      _vehicleService.getVehicle(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.vehicleFrom.patchValue(data);

        },(err:any)=>{
          alert("Internel Server Error")
        }
        )
      
    }
   
  }
  create(){
    if(this.id){
      console.log(this.vehicleFrom.value);
      this._vehicleService.updateVehicle(this.id,this.vehicleFrom.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Vecle Record updatad Successfully!");
          this._router.navigateByUrl("/dashboard/vehicle");
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
    else{
  console.log(this.vehicleFrom.value);
  this._vehicleService.createVehicle(this.vehicleFrom.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("New vehicle creat successfully!");
      this._router.navigateByUrl("/dashboard/vehicle");

    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}
}


}
