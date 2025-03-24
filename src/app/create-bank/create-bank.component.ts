import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {
  public bankForm:FormGroup=new FormGroup({
    
account_name:new FormControl(),   
account_number: new FormControl(),
available_balance:new FormControl(),
city:new FormControl(),

  })
  constructor(private _bankSarvice:BankService,private _router:Router){}
  create(){
    console.log(this.bankForm.value)
  this._bankSarvice.createBank(this.bankForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("New bank creat successfully!");
      this._router.navigateByUrl("/dashbord/create-Bank")

    },(err:any)=>{
   alert("Internal server Error")
    }
  )

  

}

}