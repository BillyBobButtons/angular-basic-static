import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Joke {
  setup: string,
  punchline: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  joke: Joke; // Declare x inside the class

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
   this.displayJoke();
  }

  displayJoke() {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    
    // Make HTTP GET request
    return this.httpClient.get(url).subscribe(
      (response: Joke) => {
        this.joke = { setup: response.setup, punchline: response.punchline };  // Assign the response to x
        console.log(this.joke);  // Log the response
      },
      (error) => {
        console.error('Error fetching joke:', error); // Handle error
      }
    );
  }
}
