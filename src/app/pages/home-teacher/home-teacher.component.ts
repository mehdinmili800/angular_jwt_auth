import { Component } from '@angular/core';
import {YourDataService} from "../../service/yourdata.service";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.css']
})
export class HomeTeacherComponent {

  constructor(private dataService: YourDataService,
              private authService:AuthenticationService,
              private router:Router) {}

  logout(): void {
    // Call the logout method from AuthenticationService
    this.authService.logout();

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
