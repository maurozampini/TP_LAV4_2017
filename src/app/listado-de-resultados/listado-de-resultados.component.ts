
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { JuegoServiceService } from '../servicios/juego-service.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  
 @Input()
 listado: any;

 unString:string;

 ngOnChanges(){ }

 
 usuario: String;
 data: Array<any>;
 
  
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



  constructor(miServicio: JuegoServiceService) {
    
   }

  ngOnInit() {
   /* localStorage.setItem('token', JSON.stringify(this.data));
    console.log(localStorage.getItem('token'));//probar json.parse porque devuelve un string*/
  }

 

  /*parsear(listado: Array<any>)
  {
    this.unString= JSON.stringify(this.listado);
    this.data= JSON.parse(this.unString);
    console.log(this.data);
  }*/

}
