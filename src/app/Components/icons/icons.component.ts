import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { CollabComponent } from '../collab/collab.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  color:any
  notes:any
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();
  isDeleted: boolean = false
  isArchived: boolean = false
  colorarray = ['red', 'green', 'black', 'orange', 'blue', 'pink', 'yellow', 'silver','gold'];
  constructor(private note: NoteService, private activatedroute: ActivatedRoute, private dialog:MatDialog) { 
    
  }

  ngOnInit(): void {
    let del = this.activatedroute.snapshot.component;

    if (del == TrashComponent) {
      this.isDeleted = true;
      console.log(this.isDeleted);
    }
    let arc = this.activatedroute.snapshot.component;

    if (arc == ArchiveComponent) {
      this.isArchived = true;
      console.log(this.isArchived);
    }
  
  }
  

  trash() {
    console.log('deleted');
    this.noteId=[this.noteObject.notesId]
    this.note.trashnotes(this.noteId).subscribe((res:any) => {
      console.log(res);
      this.iconstodisplay.emit(res)
    
    })
  }

  onArchive(){
    
    console.log('Archived');
    this.noteId=[this.noteObject.notesId]
    this.note.archiveNoteService(this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res) 
      
    })    
  }
  onDeleteForever(){
    this.noteId=[this.noteObject.notesId]
    this.note.deleteNote(this.noteId).subscribe((res:any)=>{
      console.log(res);
      this.iconstodisplay.emit(res)
      
    })
  }
  setColor(Color:any){
    this.noteId=[this.noteObject.notesId]
    let data = {
      colour : Color
    }
    this.note.ColorNote(this.noteId,data).subscribe((result: any) => {
      console.log(result); 
      this.iconstodisplay.emit(Color)

  })
}
collabPerson(collab:any): void {
  const dialogRef = this.dialog.open(CollabComponent, {
   width: '450px',
   panelClass: 'my-custom-dialog-class',
   data:collab
   });
   dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed'); 
    
   });
}
}
