import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {
  term:string='';
  StudentId:any=[]
    constructor(private _studentId:StudentIdService )
    {
      _studentId.getstudentId().subscribe(
        (data:any)=>{
          console.log(data)
          this.StudentId=data
        },
        (err:any)=>{
          alert("error it");
        }
      )
    }
    filter() {
      this._studentId.getfillteredStudentId(this.term).subscribe(
        (data:any)=>{
          console.log(data);
          this.StudentId=data;
  
        },(err:any)=>{
        alert("error it");
      }
      )
    }
    id:any='';
    order:any='';
    
  sort(){
    this._studentId.getSortedStudentId(this.id,this.order).subscribe(
      (Data:any)=>{
        console.log(Data);
        this.StudentId=Data;
        
      },(err:any)=>{
        alert("error this");
   
      }
    )
    
  }
  limit:any='';
  page:any='';
  pagination(){
    this._studentId.getpaginationStudentId(this.limit,this.page).subscribe(
    (data:any)=>{
    console.log(data);
    this.StudentId=data;
    },(err:any)=>{
      alert("error this")
    }
  )
}
delete(id:any){
  if(confirm("Are yosure to deleted?")==true){
  this._studentId.deleteStudentId(id).subscribe(
   ( data:any)=>{
    console.log(data);
    this._studentId=data;
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
