import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ApplicationComponent } from './applications/applications.component';
import { UpdateComponent } from './update/update.component';
import { UploadComponent } from './upload/upload.component';
import { SignoutComponent } from './signout/signout.component';
import { UsercoursesComponent } from './usercourses/usercourses.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    SignupComponent,
    DashboardComponent,
    CoursesComponent,
    ApplicationFormComponent,
    CourseInfoComponent,
    ApplicationComponent,
    UpdateComponent,
    UploadComponent,
    SignoutComponent,
    UsercoursesComponent,
    UserProfileComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    
    
    

  ],
  providers: [UserService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
