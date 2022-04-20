import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { TakenoteComponent } from './Components/takenote/takenote.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './Components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchiveComponent } from './Components/archive/archive.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './Components/trash/trash.component';
import { AuthguardserviceService } from './authguardservice.service';
import { SearchPipe } from './Pipes/search.pipe';
import { CollabComponent } from './Components/collab/collab.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    GetallnotesComponent,
    DisplaynotesComponent,
    IconsComponent,
    UpdateComponent,
    ArchiveComponent,
    TrashComponent,
    SearchPipe,
    CollabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [

    AuthguardserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
