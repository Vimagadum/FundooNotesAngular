import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/service/DataService/data.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  sentmsg: any;
  format: any;
  @Input() childMessage:any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();

  constructor(public dialog: MatDialog,private dataservice:DataService) { }
  ngOnInit(): void {
    this.dataservice.store1.subscribe(x => this.format=x)
  }
  openDialog(note:any): void {    
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      panelClass: 'my-custom-dialog-class',
      data:note      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
      this.noteUpdated.emit(result);   
    });
    
}
operation(value: any) {
  this.noteUpdated.emit(value);
}
recievefromiconstodisplaycard($event: any) {
  console.log("recievedindisplay");
  this.sentmsg = $event
  this.displaytogetallnotes.emit(this.sentmsg)
}
}
