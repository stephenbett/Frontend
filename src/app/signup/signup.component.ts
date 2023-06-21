import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  successMessage ="Registered Successfully"

  constructor(private userService: UserService) { }

  register() {
    const user = {
       name: '',
       email: '', 
       password: '' };
    this.userService.register(user).subscribe(
      response => {
        // Handle successful registration response
        console.log('Registered Successfull');
      },
      error => {
        // Handle error response
        console.error('Failed to Register');
      }
    );
  }

}
