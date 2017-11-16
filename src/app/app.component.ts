import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppGameMania';
  data: Array<any>;
  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(res => this.data = res.json());
  }
}
