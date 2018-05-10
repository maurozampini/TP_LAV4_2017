import { Component, OnInit } from '@angular/core';
import { Tateti } from '../clases/tateti';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  
  nuevoJuego : Tateti;
  juegoTerminado : boolean;

  constructor(private _location: Location) {
    this.nuevoJuego = new Tateti();
  }

  ngOnInit() {
  }

  volver(){
    this._location.back();
  }

  nuevo() {
    this.juegoTerminado = false;
    this.nuevoJuego.reiniciar();
    this.nuevoJuego.aQuienLeToca();
  }

  juego(pos) {
    if(this.nuevoJuego.cantTurnosJugados == 0) {
      this.nuevo();
    }
    if(!this.juegoTerminado && this.nuevoJuego.cantTurnosJugados < this.nuevoJuego.cantTurnos && this.nuevoJuego.maquinaJugador != -1 && this.nuevoJuego.maquinaJugador != this.nuevoJuego.turno) {
      this.nuevoJuego.cantTurnosJugados++;
      this.nuevoJuego.asignarPosicion(pos);
      this.juegoTerminado = this.nuevoJuego.validarJuego(this.nuevoJuego.turno);
      if(this.juegoTerminado) {
        this.nuevoJuego.gano = true;
        return;
      }
      this.nuevoJuego.aQuienLeToca();
      if(!this.juegoTerminado && this.nuevoJuego.cantTurnosJugados < this.nuevoJuego.cantTurnos && this.nuevoJuego.maquinaJugador == this.nuevoJuego.turno) {
        console.log("inicia turno maquina");
        setTimeout(() => {
        this.nuevoJuego.asignarPosicionMaquina();
        this.juegoTerminado = this.nuevoJuego.validarJuego(this.nuevoJuego.turno);
        if(this.juegoTerminado) {
          this.nuevoJuego.gano = false;
          return;
        }
        this.nuevoJuego.cantTurnosJugados++;
        var timeout = setTimeout(() => {
          console.log("termino turno maquina");
          this.nuevoJuego.aQuienLeToca();
          clearTimeout(timeout);
        }, 50);
      }, 1500);
      } else if(!this.juegoTerminado && this.nuevoJuego.cantTurnosJugados < this.nuevoJuego.cantTurnos) {
          this.juegoTerminado = true;
          //this.share.emitEvent(this.nuevoJuego);
      }
    }
  }
}