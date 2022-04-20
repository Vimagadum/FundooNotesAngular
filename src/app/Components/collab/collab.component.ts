import { Component, OnInit } from '@angular/core';
import { CollabService } from 'src/app/service/CollabService/collab.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {

  constructor(private collab: CollabService) { }

  ngOnInit(): void {
  }
  AddCollaborator(){
    
  }
  CancelCollaborator(){
    
  }

}
