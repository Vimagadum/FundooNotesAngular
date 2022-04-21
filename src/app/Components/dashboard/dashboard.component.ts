import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/DataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  isGrid: boolean=false;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router, private dataservice:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("");
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }


  listview(){
      this.isGrid=false;
      this.dataservice.updateData1(this.view().valueOf());
      console.log("function",this.view());
      console.log("grid",this.isGrid);
    }
  
    gridview(){
      this.isGrid=true
      this.dataservice.updateData1(this.view().valueOf());
      console.log("function",this.view());
      console.log("grid",this.isGrid);
    }
    changeFormat: boolean=false
    view(){
      if(this.changeFormat == false){
        this.changeFormat=true
        return this.changeFormat
      }
      else{
        this.changeFormat=false
        return this.changeFormat
      }
    }
    recieveSearchmsg(stringData:any){
      this.dataservice.updateData2(stringData.target.value);
    }
}