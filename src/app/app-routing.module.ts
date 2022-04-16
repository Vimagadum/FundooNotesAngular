import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ArchiveComponent } from './Components/archive/archive.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'notes',component:GetallnotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
