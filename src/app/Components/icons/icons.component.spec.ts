import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { IconsComponent } from './icons.component';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsComponent ],
      imports:[HttpClientModule,RouterTestingModule,MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  
});
