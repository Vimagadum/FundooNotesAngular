import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenoteComponent } from './takenote.component';

describe('TakenoteComponent', () => {
  let component: TakenoteComponent;
  let fixture: ComponentFixture<TakenoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenoteComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('noteClose',()=>{
    component.noteClose()
    expect(component.noteClose).toBeTruthy();
  });
});
