import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

const routes: Routes = [
  {path: '',component:LandingPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'courses',component:CoursesComponent},
  {path: 'applcationform',component:ApplicationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
