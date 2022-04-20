import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private information = new Subject<any>();
  public stored = this.information.asObservable();

  private information2 = new Subject<any>();
  public stored2 = this.information2.asObservable();
  constructor() { 

  }
  updateData1(text:any){
    this.information.next(text);
  }
  
  updateData2(text:any){
    this.information2.next(text);
  }

}
