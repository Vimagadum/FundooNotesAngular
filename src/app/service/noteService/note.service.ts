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
updatenote(data:any,id:any){
  console.log("token",this.token);
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': `Bearer  ${this.token}`
    })
}
return this.httpservice.putService("https://localhost:44308/api/Notes/Update/"+id, data, true, header)

}
trashnotes(id:any){
  console.log("token",this.token);

let header ={
  headers: new HttpHeaders({
    'Content-type': 'application/json',
      'Authorization':`Bearer  ${this.token}`
  })
}
return this.httpservice.putService("https://localhost:44308/api/Notes/IsTrash/"+id,{},true,header)
}

archiveNoteService(id:any){

  let headersOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':  'Bearer ' + this.token    
    })

  }
  return this.httpservice.putService("https://localhost:44308/api/Notes/IsArchive/"+id,{},true,headersOption)
}
ColorNote(id:any, data:any){

  let headersOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer  ${this.token}`		
    })

  }
  return this.httpservice.putService("https://localhost:44308/api/Notes/colour/"+id,data,true,headersOption)
}
deleteNote(id:any){
  let headersOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer  ${this.token}`		
    })
  }
  return this.httpservice.deleteService('https://localhost:44308/api/Notes/Delete/'+id, true, headersOption)
}

}
