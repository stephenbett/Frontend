import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent {
  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout().subscribe(
      () => {
        console.log('Logged out successfully');
        this.router.navigate(['/login']);

        // Perform any additional logic or navigate to another page
      },
      error => {
        console.error('Failed to log out', error);
        // Handle error response
      }
    );
  }

  // ngOnInit(): void {
  //   this.logout();
  // }

  // logout() {
  //   this.userService.logout();
  //   this.router.navigate(['/login']);
  // }

}
