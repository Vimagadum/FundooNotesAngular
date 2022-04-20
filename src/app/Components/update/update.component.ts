import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() noteUpdated = new EventEmitter<any>();
  Title: any
  Description: any
  noteId: any
  colour:any

  constructor(private NoteService: NoteService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    console.log(data);
    this.Title = data.title
    this.Description = data.description
    this.noteId = data.notesId
    this.colour=data.colour
  }

  ngOnInit(): void {
  }
  
  onClose() {
    let reqData = {
      Title: this.Title,
      Description: this.Description,
      
    }
    console.log('updated', reqData, this.noteId);

    this.NoteService.updatenote(reqData, this.noteId).subscribe((res) => {
      console.log(res);
      this.Title = ''
      this.Description = ''
      this.noteUpdated.emit(res);
       
    })
    this.dialogRef.close()

  }
  receiveMessage(event:any){
    this.colour=event;
    console.log(this.colour)
    this.noteUpdated.emit(event);
   
  }
  
  
}
