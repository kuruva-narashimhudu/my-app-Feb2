import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NaniComponent } from './nani/nani.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { DataBindingComponent } from './bank/data-binding/data-binding.component';
import { EmployeeComponent } from './directives/employee/employee.component';
import { HomeComponent } from './home/home.component';
import { CalculitorComponent } from './calculitor/calculitor.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmiComponent } from './emi/emi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { IntrestComponent } from './intrest/intrest.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule }from"@angular/common/http";
import { BankComponent } from './bank/bank.component';
import { FlipkardDitelsComponent } from './flipkard-ditels/flipkard-ditels.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { CreatStudentIdComponent } from './creat-student-id/creat-student-id.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentIdDetailsComponent } from './student-id-details/student-id-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { FlipkartRatingComponent } from './flipkart-rating/flipkart-rating.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    NaniComponent,
    Error404Component,
    WelcomeComponent,
    MyWebsiteComponent,
    HomeComponent,
    CalculitorComponent,
    CircleComponent,
    BMIComponent,
    RectangleComponent,
    EmiComponent,
    TemperatureComponent,
    IntrestComponent,
    DirectivesComponent,
    FlipkartComponent,
    VehicleComponent,
    BankComponent,
    FlipkardDitelsComponent,
    MailComponent,
    PinterestComponent,
    CreateVehicleComponent,
    CreateBankComponent,
    StudentIdComponent,
    CreatUserComponent,
    CreatStudentIdComponent,
    WeatherReportComponent,
    VehicleDetailsComponent,
    StudentIdDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    FlipkartRatingComponent,
    LifeCycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule,
   ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
