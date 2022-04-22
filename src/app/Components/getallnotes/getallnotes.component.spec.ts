import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallnotesComponent } from './getallnotes.component';

describe('GetallnotesComponent', () => {
  let component: GetallnotesComponent;
  let fixture: ComponentFixture<GetallnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallnotesComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getnote',()=>{
    component.getnote()
    expect(component.getnote).toBeTruthy();
  });
  it('updatedData',()=>{
    component.updatedData(2)
    expect(component.updatedData).toBeTruthy();
  });
  it('receiveEvent',()=>{
    component.receiveEvent(2)
    expect(component.receiveEvent).toBeTruthy();
  });
  it('receiveMessagefromdisplaycard',()=>{
    component.receiveMessagefromdisplaycard(2)
    expect(component.receiveMessagefromdisplaycard).toBeTruthy();
  });
});
