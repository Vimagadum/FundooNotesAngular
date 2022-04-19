import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private info1 = new Subject<any>();
  public store1 = this.info1.asObservable();
  
  constructor() { 

  }
  updateData1(text:any){
    this.info1.next(text);
  }
}
