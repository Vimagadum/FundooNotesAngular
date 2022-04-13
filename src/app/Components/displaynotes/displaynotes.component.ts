import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() childMessage:any;
  constructor() { }

  ngOnInit(): void {
  }

}
