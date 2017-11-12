import { Component, OnInit } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoServiceService } from '../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;

  constructor(public servicioJuego: JuegoServiceService) 
  { 
    this.listadoParaCompartir = new Array<any>();
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
