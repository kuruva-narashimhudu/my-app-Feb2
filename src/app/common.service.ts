import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  public countSub:BehaviorSubject<any>=new BehaviorSubject(0);
  constructor() { }
}
