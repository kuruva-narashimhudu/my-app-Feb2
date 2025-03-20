import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinterestService {

  constructor(private _httpclclient:HttpClient) { }
  getPinterest():Observable<any>{
    return this._httpclclient.get("https://picsum.photos/v2/list?page=1&limit=100")
}
}
