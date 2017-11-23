import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';
import { LoginComponent } from '../login/login.component';

@Injectable()
export class JuegoServiceService {

  miArray: Array<Juego>;
  unUsuario: string = "esto es juego service";

  constructor(traerMail: LoginComponent ) {
  this.miArray = new Array<Juego>();
    this.unUsuario = traerMail.email.value;
  }

  public inicializarLista(): Array<Juego>
  {
    return this.miArray;
  }
 
  public cargarLista(array: Array<Juego>)
  {
    this.miArray.concat(array);
  }

  public cargarUsuario(nombreUsuario: string)
  {
    this.unUsuario= nombreUsuario;
  }

  public retornarUsuario()
  { 
    return this.unUsuario;
  }
}
