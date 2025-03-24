import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  term:string='';
  vehicles:any=[]
  constructor(private _vehicle: VehicleService)
  {
    _vehicle.getVehicle().subscribe(
      (data:any)=>{
        console.log(data)
        this.vehicles=data
      },
      (err:any)=>{
        alert("error it");
      }
    )
  }
  // filter opration
  filter(){
    this._vehicle.getfillteredVehicles(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;

      },(err:any)=>{
      alert("error it");
    }
    )
  }
  column:string='';
  order:string='';

  sort(){
    this._vehicle.getSortedVehicles(this.column,this.order).subscribe(
      (Data:any)=>{
        console.log(Data);
        this.vehicles=Data;
      },(err:any)=>{
        alert("error thi");
   
      }
    )
    
  }
  loadVehicles(){
  this._vehicle.getVehicle().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("internal server Error");
    }
  )
  }
  delete(id:any){
    if(confirm("Are yosure to deleted?")==true){
    this._vehicle.deleteVehicle(id).subscribe(
     ( data:any)=>{
      console.log(data);
      this._vehicle=data;
      alert("Record Deleted Succssfully!")
    },
    (err:any)=>{
      alert("wrong");
    }
    )
  }else{
    alert("you have Cancelled!")
  }
  }
  limit:any='';
  page:any='';
  pagination(){
    this._vehicle.getPaginatedVhicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }


}
