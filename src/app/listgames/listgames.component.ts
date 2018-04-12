import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatIcon} from '@angular/material';

@Component({
  selector: 'app-listgames',
  templateUrl: './listgames.component.html',
  styleUrls: ['./listgames.component.css']
})
export class ListgamesComponent implements OnInit {
  showNavEvent = new Event('showNav');

animacion: string = "no";
textButtonTwo: string = "+";
  constructor() {
    dispatchEvent(this.showNavEvent);
  }

  ngOnInit() {
    
  }

enterButtonTwo() {
  this.textButtonTwo = "Quien soy";
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
/*
  $('.botonF1').hover(function(){
    $('.btn').addClass('animacionVer');
  })
  $('.contenedor').mouseleave(function(){
    $('.btn').removeClass('animacionVer');
  })
*/
}
