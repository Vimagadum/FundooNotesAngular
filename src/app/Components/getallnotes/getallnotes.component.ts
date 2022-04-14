import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notelist:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getnote();
  }
  getnote(){
    this.note.getnote().subscribe((res:any)=>{
      console.log(res.data);
      this.notelist=res.data;
      this.notelist.reverse();
      this.notelist=this.notelist.filter((object:any)=>{
        return object.isArchive===false && object.isTrash===false
      
      })
      console.log(this.notelist);
    }) 
  }
  receiveEvent($event: any) {
    this.getnote();
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes");
    this.getnote()
  }
  updatedData(value: any) {

    this.getnote();
  }
}
