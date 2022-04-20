import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private information = new Subject<any>();
  public stored = this.information.asObservable();
  
  constructor() { 

  }
  updateData1(text:any){
    this.information.next(text);
  }
}
