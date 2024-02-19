// home.component.ts

import { Component, OnInit } from '@angular/core';
import { YourDataService } from '../../service/yourdata.service';
import {AuthenticationService} from "../../service/authentication.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any; // Adjust the type based on your actual data structure
  error: any;

  constructor(private dataService: YourDataService,
              private authService:AuthenticationService,
              private router:Router) {}

  // home.component.ts

  ngOnInit(): void {
    this.dataService.getUserData().subscribe(
      data => {
        console.log('User Data:', data);
        this.userData = data;
      },
      error => {
        console.error('Error:', error);
        this.error = error;
      }
    );
  }

  logout(): void {
    // Call the logout method from AuthenticationService
    this.authService.logout();

    // Navigate to the login page
    this.router.navigate(['/login']);
  }






}
