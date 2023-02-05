import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:AppComponent,canActivate:[AuthGuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admindashboard',component:AdminpageComponent,canActivate:[AdminGuardGuard]},
  {path:'*',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
