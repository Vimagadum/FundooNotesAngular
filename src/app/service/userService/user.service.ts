import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }
  register(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
        
      })
    }
   return this.httpservice.postService("https://localhost:44308/api/User/Register", data, false, header)
  }
}
