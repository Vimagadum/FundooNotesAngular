import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl=environment.baseUrl
  token:any;
  title:any;
  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  createnote(data:any){
    console.log("token",this.token);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': `Bearer  ${this.token}`
      })
  }
  return this.httpservice.postService("https://localhost:44308/api/Notes/Create", data, true, header)

}
getnote(){
  console.log("token",this.token);
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': `Bearer  ${this.token}`
    })
}
return this.httpservice.getService("https://localhost:44308/api/Notes/GetNote", true, header)

}

}
