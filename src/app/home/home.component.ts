import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  x: any; // Declare x inside the class

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    
    // Make HTTP GET request
    this.httpClient.get(url).subscribe(
      (response) => {
        this.x = response;  // Assign the response to x
        console.log(this.x);  // Log the response
      },
      (error) => {
        console.error('Error fetching joke:', error); // Handle error
      }
    );
  }
}
