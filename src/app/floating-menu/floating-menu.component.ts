import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.css']
})
export class FloatingMenuComponent implements OnInit {

  animacion: string = "no";
  textButtonTwo: string = "+";

  constructor() { }

  ngOnInit() {
  }

  enterButtonTwo() {
    this.textButtonTwo = "QuienSoy";
  }
  
  leaveButtonTwo() {
    this.textButtonTwo = "+";
  }
  
    enter() {
      this.animacion = "si";
      //var btn = <HTMLElement> document.querySelector('#btn');
      //btn.classList.add('.animacionVer');
      console.log("hover boton");
    }
    leave() {
      this.animacion = "no";
      //var btn = <HTMLElement> document.querySelector('#btn');
      //btn.classList.add('.animacionVer');
      console.log("mouseleave boton");
    }

}
