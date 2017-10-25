import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p;

  constructor() {
    // $(document).ready(function(){
    //   $('.parallax').parallax();
    // });
   }

  ngOnInit() {
    // $('.parallax').parallax();
    $('#1').parallax();
    $('#2').parallax();
    $('#3').parallax();
  }

}
