import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { MatDialog } from '@angular/material/dialog';
import { CourseInfoComponent } from '../course-info/course-info.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses: any=[];
  applicant_form = false;

  constructor(private courseService: DataService,
    private dialog:MatDialog) { }

  
  applyClick(course: any): void {
      this.dialog.open(ApplicationFormComponent, {
        width: '500px',
        disableClose: true,
        data:course
        });
    }


infoClick(course: any): void {
      this.dialog.open(CourseInfoComponent, {
        width: '800px',
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

}
