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
      () => {
        // Navigate to the home page after successful login
        this.router.navigate(['/home']);
      },
      error => {
        // Handle login error
        console.error(error);
      }
    );
  }
}
