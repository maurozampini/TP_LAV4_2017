import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listgames',
  templateUrl: './listgames.component.html',
  styleUrls: ['./listgames.component.css']
})
export class ListgamesComponent implements OnInit {
  showNavEvent = new Event('showNav');

  constructor() {
    dispatchEvent(this.showNavEvent);
  }

  ngOnInit() {
  }

}
