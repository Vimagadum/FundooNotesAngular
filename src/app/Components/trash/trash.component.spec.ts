import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { TrashComponent } from './trash.component';

describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashComponent ],
      imports:[MatDialogModule,HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getTrashArray',()=>{
    component.getTrashArray()
    expect(component.getTrashArray).toBeTruthy();
  });
  it('receiveMessagefromdisplaycard',()=>{
    component.receiveMessagefromdisplaycard(2)
    expect(component.receiveMessagefromdisplaycard).toBeTruthy();
  });
});
