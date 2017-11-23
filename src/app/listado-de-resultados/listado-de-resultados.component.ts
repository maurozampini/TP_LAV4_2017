
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { JuegoServiceService } from '../servicios/juego-service.service';
import { Juego } from '../clases/Juego';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  
 @Input()

 public listadoParaCompartir: Array<any>;
 listado: any;

 usuario: String;
 data: Array<any>;
 unString:string;

 ngOnChanges(){ }

 constructor(public miServicio: JuegoServiceService) {
   this.listadoParaCompartir = new Array<any>();
 }

 

 
ngOnInit() {
  this.listadoParaCompartir=this.miServicio.inicializarLista();  
}

 tomarJuegoTerminado(juego: Juego)
 {
   this.listadoParaCompartir.push(juego);
   this.miServicio.cargarLista(this.listadoParaCompartir); 
 }
  
 /*miSmartTable: Ng2SmartTableModule={
  columns: {
    juego: {
      title: 'JUEGO'
    },
    usuario: {
      title: 'USUARIO'
    },
    resultado: {
      title: 'RESULTADO'
    }
  }
};*/







 

  /*parsear(listado: Array<any>)
  {
    this.unString= JSON.stringify(this.listado);
    this.data= JSON.parse(this.unString);
    console.log(this.data);
  }*/

}
