import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-creat-student-id',
  templateUrl: './creat-student-id.component.html',
  styleUrls: ['./creat-student-id.component.css']
})
export class CreatStudentIdComponent {
  public studentIdForm:FormGroup=new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    dob:new FormControl(),
    city:new FormControl(),
    email:new FormControl(),

  }) 
    constructor(private studentIdService:StudentIdService,private _router:Router){}
    create(){
      console.log(this.studentIdForm.value);
      this.studentIdService.createStudentId(this.studentIdForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("new id create!");
          //  this._router.navigetStusentId("/dashbord/student-id")
        },(err:any)=>{
          alert("error it")
        }
      )
    }
  }


