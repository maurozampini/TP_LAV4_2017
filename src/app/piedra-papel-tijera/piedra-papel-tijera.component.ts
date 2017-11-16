import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { PiedraPapelTijera } from '../clases/piedra-papel-tijera';
import { JuegoServiceService } from '../servicios/juego-service.service';



@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juegoPPT: PiedraPapelTijera;

    @Output()
    enviarJuego:EventEmitter<any>= new EventEmitter<any>();

  constructor(private miServicio?: JuegoServiceService) 
  { 
    this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera", "Alan", true);
  }

  Piedra()
  {
    this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera", "Alan", true);
    this.juegoPPT.Piedra();
    this.juegoPPT.jugador = this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.juegoPPT);
    
  }

  Papel()
  {
    this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera", "Alan", true);
    this.juegoPPT.Papel();
    this.juegoPPT.jugador = this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.juegoPPT);
    
  }

  Tijera()
  {
    this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera", "Alan", true);
    this.juegoPPT.Tijera();
    this.juegoPPT.jugador = this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.juegoPPT);
    
  }


  ngOnInit() {
  }

}
