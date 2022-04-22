import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule} from '@angular/material/dialog';

import { CollabComponent } from './collab.component';

describe('CollabComponent', () => {
  let component: CollabComponent;
  let fixture: ComponentFixture<CollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabComponent ],
      imports:[HttpClientModule,MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
