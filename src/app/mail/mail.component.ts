import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  Mails:any=[]
    constructor(private _mail:MailService){
   _mail.getMail().subscribe(
    (data:any)=>{
      console.log(data)
      this.Mails=data
    },
    (err:any)=>{
      alert("wrong api")
    }
   )
    }
}
