import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string | undefined ;
  public password: string | undefined ;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(
      response => {
        // Check the user role from the authentication response
        const role = response.role;

        // Redirect based on user role
        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/home']); // Replace 'admin' with your admin route
        } else if (role === 'ROLE_TEACHER') {
          this.router.navigate(['/home-teacher']); // Replace 'teacher' with your teacher route
        }
      },
      error => {
        // Handle login error
        console.error(error);
      }
    );
  }
}
