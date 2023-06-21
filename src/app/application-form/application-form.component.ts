import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {

  constructor(private http:HttpClient,
    @Inject(MAT_DIALOG_DATA)public data: any){
      console.log(data);

    } 


  formData = {
    courseNo:this.data.courseNo,
    courseName:this.data.CourseName,
    FirstName: '',
    Surname:'',
    Date_of_Birth:'',
    Phone_No:"",
    Email:''
  };
  

  onapply() {
    var url = 'https://localhost:44395/api/applicant';

    this.http.post(url, this.formData).subscribe(
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


}
