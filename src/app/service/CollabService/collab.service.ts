import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CollabService {
  token:any;
  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  collabnote(data:any){
    console.log("collabing Note");
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': `Bearer  ${this.token}`
      })
  }
  return this.httpservice.postService("https://localhost:44308/api/Collab/Add", data, true, header)

}
}
