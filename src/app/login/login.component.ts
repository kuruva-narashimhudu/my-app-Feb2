import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginFrom:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })
  
  constructor(private _loginService:LoginService,private _router:Router){
  }
  login(){
    console.log(this.loginFrom.value);
    this._loginService.login(this.loginFrom.value).subscribe(
    (data:any)=>{
      alert("Login Succesfull");
      sessionStorage.setItem('token',data.token);
      this._router.navigateByUrl("/dashboard");
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
  }
    
  }

