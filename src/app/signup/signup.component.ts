import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  successMessage ="Registered Successfully"

  user = {
    FirstName:'',
    SurName:'',
    PhoneNumber:'',
    PostalCode:'',
    UserName: '',
    Id_No:'',
    Email: '', 
    Date_of_birth:'',
    Password: ''
       };

  constructor(private userService: UserService, private router: Router) {}
    
   
  
       
  register() {
    console.log(this.user)
   
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




/*  this.formSubmitted = true;
if (this.registerForm.invalid) {
  return;
}
*/