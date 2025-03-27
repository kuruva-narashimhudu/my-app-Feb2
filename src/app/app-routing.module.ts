import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NaniComponent } from './nani/nani.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CalculitorComponent } from './calculitor/calculitor.component';
import { EmiComponent } from './emi/emi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { IntrestComponent } from './intrest/intrest.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { FlipkardDitelsComponent } from './flipkard-ditels/flipkard-ditels.component';
import { FlipkartDitelsService } from './flipkart-ditels.service';
import { MailComponent } from './mail/mail.component';
import { EmployeeComponent } from './directives/employee/employee.component';
import { DataBindingComponent } from './bank/data-binding/data-binding.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { CreatStudentIdComponent } from './creat-student-id/creat-student-id.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AurthenticationGuard } from './aurthentication.guard';
import { StudentIdDetailsComponent } from './student-id-details/student-id-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {path:'dashboard',component:DashbordComponent,canActivate:[AurthenticationGuard] ,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'calculator',component:CalculitorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BMIComponent},
    {path:'emi',component:EmiComponent},
    {path:'employee',component:EmployeeComponent},
    {path: 'data-binding',component:DataBindingComponent},
    {path:'temperature',component:TemperatureComponent},
    {path:'intrest',component:IntrestComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent},
    {path :'bank',component:BankComponent},
    {path :'flipkard',component:FlipkardDitelsComponent},
    {path : 'mail',component:MailComponent},
    {path :'pinterest',component:PinterestComponent},
    {path : 'create Veehicle',component:CreateVehicleComponent},
    {path :'create-Bank',component:CreateBankComponent },
    {path :'student-id',component:StudentIdComponent},
    {path :'creat-user',component:CreatUserComponent},
    {path :'creat-student-id',component:CreatStudentIdComponent},
    {path : 'weather-report',component:WeatherReportComponent},
    {path : 'vehicle-details/:id',component:VehicleDetailsComponent},
    {path :'edit-vehicle/:id',component:CreateVehicleComponent},
    {path :'studentId-details/:id',component:StudentIdDetailsComponent},
    {path : 'sibling',component:Sibling1Component},
    {path : 'parent',component:ParentComponent}  
  ]},
  
  {path:'home',component:HomeComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'nani',component:NaniComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:Error404Component}
 
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
