import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { MatDialog } from '@angular/material/dialog';
import { CourseInfoComponent } from '../course-info/course-info.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses: any=[];
  applicant_form = false;
  applicants: any=[];
  info:any=[];
  users:any=[];

  constructor(private courseService: DataService, private applicantservice: DataService, private userservice: UserService,
    private dialog:MatDialog) { }

  
  applyClick(course: any, users: any): void {
      this.dialog.open(ApplicationFormComponent, {
        width: '800px',
        disableClose: false,
        data: course,
        

        // {coursesdata:course,
        // applicantsdata:this.applicants}
        });
    }


infoClick(course: any): void {
      this.dialog.open(CourseInfoComponent, {
        width: '500px',
        disableClose: true,
        data:course
        });
    }


  
  ngOnInit(): void {
    this.refreshCourseList();
  }
  

  refreshCourseList(){
    this.courseService.getCourses().subscribe(data=>{this.courses=data});
  }

  refreshAppliantList(){
    this.applicantservice.getApplicants().subscribe(data=>{this.applicants=data});
    }

    register() {
      this.userservice.register(this.users).subscribe(info=>{this.users=info});
    }

}
