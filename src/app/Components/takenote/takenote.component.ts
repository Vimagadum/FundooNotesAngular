import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgControl, NgForm, NgModelGroup } from '@angular/forms';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  takenote!:NgForm;
  public notelist :boolean=false;
  description:string = ""
  title:string=""
  reminder:string="2022-04-11T11:27:12.305Z"
  color:string="white"
  image:string="image1.jpg"
  isarchive:boolean=false;
  ispin:boolean=false;
  istrash:boolean=false;
  createdAt:any="2022-04-11T11:27:12.305Z"
  modifiedAt:any="2022-04-11T11:27:12.305Z"
  constructor(private noteService: NoteService) { }
  @Output() createToGetAllNotes = new EventEmitter<string>()

  ngOnInit(): void {
  }
  noteClick(){
    
    this.notelist = true
    
  }
  noteClose(){
    
    this.notelist = false
    console.log(this.title, this.description);
    if((this.title==null||this.title=="") && (this.description==null||this.description=="")){
      console.log("values are null");
    }
    else{
    let data={
      title: this.title,
      description:this.description,
      remainder: this.reminder,
      colour: this.color,
      image: this.image,
      isTrash: this.istrash,
      isArchive: this.isarchive,
      isPinn: this.ispin,
      createdAt: this.createdAt,
      modifierAt: this.modifiedAt
    }
    this.noteService.createnote(data).subscribe((res:any)=>{
      console.log(res);   
      this.title="";
      this.description="";   
      this.createToGetAllNotes.emit(res)
      
    })
  }
  }
}
