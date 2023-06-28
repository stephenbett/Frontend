import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any; 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserDetails(this.user ).subscribe(
      response => {
        // Assign the user details to the component variable
        this.user = response;
        localStorage.setItem('email',  response.Email)
        console.log(this.user)
      },
      error => {
        console.error('Failed to fetch user details');
      }
    );
  }
}