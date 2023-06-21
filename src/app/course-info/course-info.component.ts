import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent {

  constructor(private http:HttpClient,
    @Inject(MAT_DIALOG_DATA)public data: any){
      console.log(data);

    } 


  coursedata = {
    courseNo:this.data.courseNo,
    courseName:this.data.CourseName,
    SchoolName:this.data.SchoolName,
    DurationYears:this.data.DurationYears,
    DepartmentCode:this.data.DepartmentCode,
    LevelOfStudy:this.data.LevelOfStudy,
  };
  

  oninfo() {

    return this.coursedata
  //   this.http.post(url, this.formData).subscribe(
  //     (response) => {
  //       // Handle the response from the API
  //       console.log(response);
  //     },
  //     (error) => {
  //       // Handle any errors that occur during the request
  //       console.error(error);
  //     }
  //   );
  }


}
