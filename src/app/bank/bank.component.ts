import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  term:any='';
    banks:any=[]
    constructor(private _bank: BankService)
    {
      _bank.getBank().subscribe(
        (data:any)=>{
          console.log(data)
          this.banks=data
        },
        (err:any)=>{
          alert("alert error")
        }
      )
    }
    fillter(){
      this._bank.getfilletredBank(this.term).subscribe(
        (data:any)=>{
          console.log(data);
          this.banks=data;
  
        },(err:any)=>{
        alert("wrong api");
      }
      )
    }
    column:string='';
    order:string='';
    sort(){
      this._bank.getsortedBank(this.column,this.order).subscribe(
        (data:any)=>{
          console.log(data);
          this.banks=data;
  
        },(err:any)=>{
        alert("wrong api");
      }
      )
    }
    limit:any='';
    page:any='';

    pagination(){
      this._bank.getPaginatedBank(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
      this.banks=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )

}
loadVehicles(){
  this._bank.getBank().subscribe(
    (data:any)=>{
      console.log(data);
      this.banks=data;
      console.log(this.banks);
    },(err:any)=>{
      alert("internal server Error");
    }
  )
  }
  delete(id:any){
    if(confirm("Are you sure to deleted?")==true){
    this._bank.deleteBank(id).subscribe(
     ( data:any)=>{
      console.log(data);
      this._bank=data;
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
}