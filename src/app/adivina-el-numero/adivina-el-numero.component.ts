
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../clases/juego-adivina';
import { JuegoServiceService } from '../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  unJuego: JuegoAdivina;
  
    @Output()
    enviarJuego:EventEmitter<any>= new EventEmitter<any>();

    constructor(private miServicio?: JuegoServiceService) 
    { 
      
    }

    generar()
    {
      this.unJuego = new JuegoAdivina("Adivina","Mauro", true);
      this.unJuego.GenerarNuevo();
    }
  
    verificar()
    {
      this.unJuego.jugador = this.miServicio.retornarUsuario();
     
      if(this.unJuego.Verificar())
        this.enviarJuego.emit(this.unJuego);
      else
        this.enviarJuego.emit(this.unJuego);
    }
    
    ngOnInit() {
      this.generar();
    }


}
