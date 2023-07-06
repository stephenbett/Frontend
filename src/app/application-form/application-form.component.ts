import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  successMessage: string ='';
  isLoading: boolean =false;
  // dialogRef: any;
  user: any;

  constructor(private http:HttpClient,
    private userService :UserService,
    private dialogRef: MatDialogRef<ApplicationFormComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any,
     private router: Router){
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


  ngOnInit() {
    
    this.userService.getUserDetails(this.user ).subscribe(

      response => {
        //console.log(response)
        // Assign the user details to the component variable
        this.user = response;
        // localStorage.setItem('email', response.email,)
        console.log(response)
        console.log(this.user)
      },
      error => {
        console.error('Failed to fetch user details');
      }
    );
  }

  onapply() {
    this.successMessage ="";
    this.isLoading =true;
    var url = 'https://localhost:44395/api/applicant';
    // this.successMessage = 'Successfully applied!';
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

    setTimeout(() => {
      // Assuming the API call is successful
      this.successMessage = 'Application successful!';
      this.isLoading = false;

      // Closing the dialog and navigating to courses page after a delay
      setTimeout(() => {
        this.dialogRef.close();
        this.router.navigate(['/courses']);
      }, 2000);
    }, 2000);
   
  }


}
