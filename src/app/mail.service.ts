import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpClint:HttpClient) { }
  
  
getMail():Observable<any>{
  return this._httpClint.get("https://jsonplaceholder.typicode.com/todos")
}
}