import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseInfoComponent } from '../course-info/course-info.component';

@Component({
  selector: 'app-usercourses',
  templateUrl: './usercourses.component.html',
  styleUrls: ['./usercourses.component.css']
})
export class UsercoursesComponent implements OnInit {

  courses: any=[];



  infoClick(course: any): void {
    this.dialog.open(CourseInfoComponent, {
      width: '500px',
      disableClose: true,
      data:course
      });
  }

constructor(private courseService: DataService,
    private dialog:MatDialog) { }


ngOnInit(): void {
  this.refreshCourseList();
}


refreshCourseList(){
  this.courseService.getCourses().subscribe(data=>{this.courses=data});
}

}
