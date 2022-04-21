import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {
  firstName=localStorage.getItem('first');
  lastname=localStorage.getItem('last');
  email=localStorage.getItem('email');
  CollabEmail:any;
  id:any;
  noteId: any

  constructor(private noteService:NoteService, public dialogRef: MatDialogRef<CollabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  AddCollaborator(){
    console.log(this.data.id);
    let body={
      collabEmail:this.CollabEmail,
    }
    this.noteService.addCollabService(body,this.noteId).subscribe((result)=>{
      console.log(result);
      
    })
  }
  CancelCollaborator(){
    
  }

}
