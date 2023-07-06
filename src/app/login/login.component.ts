import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // email!: string;
  // password: string | undefined;

  credentials = { 
    username: '',
    password: '',
    grant_type :'password'
  };

  constructor(private userService: UserService,private router: Router) { }
  

  login() {
    

    this.userService.login(this.credentials).subscribe(

      response => {
        localStorage.setItem("token",response.access_token)
        localStorage.setItem("email", response.email)
        localStorage.setItem("username", response.username)
        localStorage.setItem("FirstName",response.FirstName)
        localStorage.setItem("SurName",response.SurName)
        localStorage.setItem("PhoneNumber",response.PhoneNumber)
        localStorage.setItem("Id_No",response.Id_No)
        localStorage.setItem("Email",response.email)
        localStorage.setItem("Date_of_birth",response.Date_of_Birth)
        localStorage.setItem("FirstName",response.FirstName)
        console.log(response)

        // Handle successful login response
        console.log('Login Sucessfull');
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Handle error response
        console.error('Login Failed');
      }
    );
  }

}

