import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent {
  constructor(private http:HttpClient,
    @Inject(MAT_DIALOG_DATA)public data: any
    //  {
    //   coursesdata:any,
    //   applicantsdata:any
    //   }
    ) {
      console.log(data)
    }

  // updateData = {
  //   FirstName: this.data.applicantsdata.FirstName,
  //   Surname:this.data.applicantsdata.Surname,
  //   Age:this.data.applicantsdata.Age,
  //   Phone_No:this.data.applicantsdata.Phone_No,
  //   Email:this.data.applicantsdata.Email,
  //   CourseNo:this.data.coursesdata.CourseNo,
  // };

  updateData = {
    FirstName:'',
    Surname:'',
    Phone_No:'',
    Email:this.data.Email,
    CourseNo:this.data.CourseName,
  };
  

  onUpdate() {
    var url = 'https://localhost:44395/api/applicant';

    this.http.put(url, this.updateData).subscribe(
      (response) => {
        // Handle the response from the API
        console.log(response);
      },
      (error) => {
        // Handle any errors that occur during the request
        console.error(error);
      }
    );
  }

  apply(): void {
    // Add your apply logic here
  }

}
