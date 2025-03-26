import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id-details',
  templateUrl: './student-id-details.component.html',
  styleUrls: ['./student-id-details.component.css']
})
export class StudentIdDetailsComponent {
  id:number=0;
  studentId:any='';
  constructor(private _activetedRoute:ActivatedRoute,
    private _StudentIdService:StudentIdService){
    _activetedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id)
      },(err:any)=>{
        alert("Interna Server Error")
      }
    )
    _StudentIdService.getStudentIds(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentId=data;
      },(err:any)=>{
        alert("internal server error")
      }
    )
  }

}
