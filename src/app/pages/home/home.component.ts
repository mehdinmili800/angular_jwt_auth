// home.component.ts

import { Component, OnInit } from '@angular/core';
import { YourDataService } from '../../service/yourdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any; // Adjust the type based on your actual data structure
  error: any;

  constructor(private dataService: YourDataService) {}

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

}
