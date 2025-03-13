import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisiable:boolean=true;

  states:string[]=['karnataka','tamilnadu','andhrapradesh','telangana','kerala','maharast'];
  products:any=[
    {name:'pen',price:10 ,rating:4.4},
    {name:'book',price:50 ,rating:1.9},
    {name:'shirt',price:400 ,rating:4.3},
    {name:'laptop',price:15000 ,rating:4.5},
    {name:'shoes',price:10000 ,rating:4.3},
    {name:'bick',price:10000 ,rating:4.5},
    {name:'car',price:100000,rating:4.5},
  ]
  newDate:Date=new Date();

}
