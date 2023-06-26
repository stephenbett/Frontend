import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationComponent } from './applications/applications.component';
import { UpdateComponent } from './update/update.component';
import { UploadComponent } from './upload/upload.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {path: '',component:LandingPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'courses',component:CoursesComponent},
  {path: 'applcationform',component:ApplicationFormComponent},
  {path:'applications',component: ApplicationComponent},
  {path: 'upload',component: UploadComponent},
  {path:'update',component:UpdateComponent},
  {path: 'signout',component:SignoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
