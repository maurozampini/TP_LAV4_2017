import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../clases/juego-anagrama';
import { JuegoServiceService } from '../servicios/juego-service.service';
import { SwalService } from '../services/swal.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  miJuego: JuegoAnagrama;

  @Output()
  enviarJuego:EventEmitter<any>= new EventEmitter<any>();

constructor(private miServicio?: JuegoServiceService, private nombre?: LoginComponent) 
{
  this.miJuego = new JuegoAnagrama("Anagrama", "AnagramaComponent", false);
  //console.log(miServicio.user);
}


  ngOnInit() {
    this.jugar();
  }

  rendirse()
  {
    this.miJuego.Rendirse();
    this.miJuego.jugador= this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.miJuego);
  }

  verificar(laPalabra: string)
  {
    this.miJuego.Verificar(laPalabra);
    if(this.miJuego.contador == 0 || this.miJuego.gano == true)
    {
      this.miJuego.jugador= this.miServicio.retornarUsuario();
      console.log(this.miJuego);
      this.enviarJuego.emit(this.miJuego);
      this.miJuego.Comenzar();
      //this.miJuego = new JuegoAnagrama("Anagrama", "Mauro", false);
    }
    
  }

  jugar()
  {
    this.miJuego.resultado = "";
    this.miJuego.Comenzar();
    this.miJuego.contador = 3;
    this.miJuego.habilitar = true;
  }

  /* this.unJuego.nombre= this.miServicio.retornarUsuario();
      this.enviarJuego.emit(this.unJuego);*/
}
