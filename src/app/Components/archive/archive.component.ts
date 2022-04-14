import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archiveArray: any;
  

  constructor(public dialog: MatDialog, private note: NoteService) { }

  ngOnInit(): void {
    this.getArchiveArray();
  }
  getArchiveArray() {
    this.note.getnote().subscribe((res: any) => {
      console.log(res.data);
       this.archiveArray=res.data
       this.archiveArray = res.data.filter((object: any) => {
        return object.isArchive === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("", $event);
      this.getArchiveArray();

  }

}
