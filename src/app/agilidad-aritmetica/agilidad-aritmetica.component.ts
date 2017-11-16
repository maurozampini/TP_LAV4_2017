import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../clases/juego-agilidad';
import { JuegoServiceService } from '../servicios/juego-service.service';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  /* @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();*/
  unJuego: JuegoAgilidad;

  @Output()
  enviarJuego:EventEmitter<any>= new EventEmitter<any>();

  usuario: string;
  
    constructor(private miServicio?: JuegoServiceService)
     { 
      this.unJuego = new JuegoAgilidad("Agilidad","Alan",true);
     }
     
    ngOnInit() {
      this.generar();
    }

    generar()
    {
      this.unJuego.Jugar();
      if(this.unJuego.contador==3)
      {
        this.verificar();
      }
    }
 
    verificar()
    {
      this.unJuego.Verificar();
      this.unJuego.jugador= this.miServicio.retornarUsuario();
      this.enviarJuego.emit(this.unJuego);
    }

   
    
    
    


}
