import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password: string | undefined;

  constructor(private userService: UserService) { }
  

  login() {
    var credentials = { 
      email: this.email,
      password: this.password };

    this.userService.login(credentials).subscribe(
      response => {
        // Handle successful login response
        console.log('Login Sucessfull');
      },
      error => {
        // Handle error response
        console.error('Login Failed');
      }
    );
  }

}

