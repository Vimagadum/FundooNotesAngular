import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashArray : any;

  constructor(public dialog: MatDialog, private note: NoteService) { }

  ngOnInit(): void {
    this.getTrashArray();
  }
  getTrashArray(){
    this.note.getnote().subscribe((res: any) => {
      console.log(res.data);
       this.trashArray=res.data
       this.trashArray = res.data.filter((object: any) => {
        return object.isTrash === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("", $event);
      this.getTrashArray();

  }

  
  
}

