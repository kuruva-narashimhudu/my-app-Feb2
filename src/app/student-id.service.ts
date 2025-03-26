import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIdService {

  constructor(private _httpClient:HttpClient) { }
    getstudentId():Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
}
getfillteredStudentId(term:any,):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)
}
getSortedStudentId(id:any,order:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+id+"&order="+order)
}
getpaginationStudentId(limit:any,page:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page)

}
createStudentId(data:any):Observable<any>{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student?",data);

}
deleteStudentId(id:any):Observable<any>{
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)

}
getStudentIds(id:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)


}
}