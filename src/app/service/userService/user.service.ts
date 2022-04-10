import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/Components/login/login.component';
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
  login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
        
      })
  }
  return this.httpservice.postService("https://localhost:44308/api/User/Login", data, false, header)

}
forget(data:any){
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json'
      
    })
}
return this.httpservice.postService("https://localhost:44308/api/User/ForgetPassword?email="+data.email,{}, false, header)

}
reset(data:any){
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ2aW5heWFrbWFnYWR1bTAzMUBnbWFpbC5jb20iLCJJZCI6IjIyIiwiZXhwIjoxNjQ5NDEwMTM5fQ.o3vWslwl7zJBI1PFbIfzBTl8cFzD82vGdhmEsgldtLQ'
    })
}
return this.httpservice.putService("https://localhost:44308/api/User/ResetPassword",data, true, header)
}
}