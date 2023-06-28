import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  successMessage ="Registered Successfully"

  constructor(private userService: UserService, private router: Router) { }
  user = {
    UserName: '',
      Email: '', 
      Password: ''
       };

       

  register() {
    this.userService.register(this.user).subscribe(
      response => {
        // Handle successful registration response
        console.log('Registered Successfull');
        this.router.navigate(['/login']);
      },
      error => {
        // Handle error response
        console.error('Failed to Register');
      }
    );
  }

}
