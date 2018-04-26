import { Component, OnInit } from '@angular/core';
import hola from  '../../assets/tateti.js';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  
  Element: HTMLElement;  
  
  ngOnInit(){
    hola.v()
    var x   = document.getElementsByClassName('result');
    var g = x[0]
  
  }
 
  x () {
    hola.v()
  var x   = document.getElementsByClassName('result');
  var g = x[0]

console.log(g);
  }



}