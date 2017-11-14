import { Component, OnInit } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAnagrama } from '../clases/juego-anagrama';
import { JuegoServiceService } from '../servicios/juego-service.service';

@Component({
  selector: 'app-anagrama-mas-listado',
  templateUrl: './anagrama-mas-listado.component.html',
  styleUrls: ['./anagrama-mas-listado.component.css']
})
export class AnagramaMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  
    constructor(public servicioJuego: JuegoServiceService) 
    { 
      this.listadoParaCompartir = new Array<any>()
    }
  
    ngOnInit() {
  
      this.listadoParaCompartir=this.servicioJuego.inicializarLista();  
    }
  
    tomarJuegoTerminado(juego: Juego)
    {
      this.listadoParaCompartir.push(juego);
      this.servicioJuego.cargarLista(this.listadoParaCompartir); 
    }

}
