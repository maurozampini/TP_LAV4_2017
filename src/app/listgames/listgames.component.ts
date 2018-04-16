import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatIcon} from '@angular/material';

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


/*
  $('.botonF1').hover(function(){
    $('.btn').addClass('animacionVer');
  })
  $('.contenedor').mouseleave(function(){
    $('.btn').removeClass('animacionVer');
  })
*/
}
