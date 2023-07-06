import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {

  successMessage!: string;
  dialogRef: any;
  user: any;

  constructor(private http:HttpClient,
    @Inject(MAT_DIALOG_DATA)public data: any, private router: Router){
      console.log(data);
      // console.log(info);


    } 

  formData = {
    Course:this.data.CourseNo,
    CourseName:this.data.CourseName,
    FirstName: '',
    MiddleName:'',
    Surname:'',
    Date_of_Birth:'',
    Phone_No:"",
    Address:"",
    Id_No:"",
    Email:"",
  };
  
  phoneNoControl = new FormControl();
  idNoControl = new FormControl();
  idNoExists = true;

  onapply() {
    var url = 'https://localhost:44395/api/applicant';
    this.successMessage = 'Successfully applied!';

   
     this.http.post(url, this.formData).subscribe(
      (response) => {
        // Handle the response from the API
        console.log(response);
        this.router.navigate(['/courses']);
      },
      (error) => {
        // Handle any errors that occur during the request
        console.error(error);
      }

    // Close the dialog after a delay (optional)
    
    );
   
  }


}
