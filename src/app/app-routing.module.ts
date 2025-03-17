import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NaniComponent } from './nani/nani.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CalculitorComponent } from './calculitor/calculitor.component';
import { EmiComponent } from './emi/emi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { IntrestComponent } from './intrest/intrest.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'dashbord',component:DashbordComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculitorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BMIComponent},
    {path:'emi',component:EmiComponent},
    {path:'temperature',component:TemperatureComponent},
    {path:'intrest',component:IntrestComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent}


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
