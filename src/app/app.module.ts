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
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculitorComponent } from './calculitor/calculitor.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { FormsModule } from '@angular/forms';
import { EmiComponent } from './emi/emi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { IntrestComponent } from './intrest/intrest.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule }from"@angular/common/http"
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
    DataBindingComponent,
    CalculitorComponent,
    CircleComponent,
    BMIComponent,
    RectangleComponent,
    EmiComponent,
    TemperatureComponent,
    IntrestComponent,
    DirectivesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
