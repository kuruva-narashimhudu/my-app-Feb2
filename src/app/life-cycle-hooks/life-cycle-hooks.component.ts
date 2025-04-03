import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent  implements OnChanges,OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{

  interval:any;
  ngOnInit(): void {
    console.log("ngOnInit running");
    this.interval=setInterval(()=>{
      console.log("count");

    }, 1000)
  }
  ngOnDestroy(): void {
  console.log("ngOnDestroy running");
  clearInterval(this.interval);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges runnig")
  }
  ngDoCheck(): void {
    console.log("ngOnDengDoCheckstroy running");
  }
  ngAfterViewInit(): void {
    console.log("ngOnngAfterViewInitDestroy running");  }
  ngAfterViewChecked(): void {
    console.log("ngOnDngAfterViewCheckedestroy running");  }
  ngAfterContentInit(): void {
    console.log("ngOnDngAfterContentInitestroy running");  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked running");  }

}
