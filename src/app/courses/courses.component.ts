import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses: any=[];
  applicant_form = false;

  constructor(private courseService: DataService,
    private http:HttpClient) { }

  applyClick(){
    
  }

  infoClick(){
    
  }
  ngOnInit(): void {
    this.refreshCourseList();
  }
  

  refreshCourseList(){
    this.courseService.getCourses().subscribe(data=>{this.courses=data});
  }

}
