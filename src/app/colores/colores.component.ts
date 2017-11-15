import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
    title = 'app';
    self = this;
    pulsVerde = document.querySelector('#verde');
     pulsRojo = document.querySelector('#rojo');
     pulsAmarillo = document.querySelector('#amarillo');
     pulsAzul = document.querySelector('#azul');
     aparato = <HTMLElement> document.querySelector('#aparato');
     empezar = document.querySelector('#empezar');
     salida = <HTMLElement> document.querySelector('#salida');
        // variables con los estilos CSS para los cuatro pulsadores en ambos estados: apagado y encendido...
     verde: string = "verdeA";
     rojo: string = "rojoA";
     amarillo: string = "amarilloA";
     azul: string = "azulA";
      nivel;          // indica el nivel actual
      secuencia: string[];      // array con los colores a repetir
      indSec: number;         // índice de la secuencia de colores
  
     // Se programa que cuando se cliqueé el botón "COMENZAR" comienze la partida...
    constructor(){
      //this.empezar.addEventListener("click", this.comienzaPartida);
  
  
    }
  
   reseteaAparato(){
      this.nivel = 1;
      this.secuencia = [];
      this.indSec = 0;
      this.verde = "verdeA";
      this.rojo = "rojoA";
      this.amarillo = "amarilloA";
      this.azul = "azulA";
      //this.salida.innerHTML = 'NIVEL ' + this.nivel;
  }
    
  numAleat(limInf, limSup){
    return limInf + Math.floor(Math.random() * (limSup - limInf + 1) );
  }
  
  aniadeColorSecuencia(){
    var colores = ['verde', 'rojo', 'amarillo', 'azul'];
    this.secuencia.push(colores[this.numAleat(0,3)] );   // se añade un color aleatorio al final del array
    console.log(this.secuencia);
  }
  
  apagaColor(){
      switch(this.secuencia[this.indSec]){
          case 'verde':
          this.verde = "verdeA";
              break;
          case 'rojo':
          this.rojo = "rojoA";
              break;
          case 'amarillo':
          this.amarillo = "amarilloA";
              break;
          case 'azul':
          this.azul = "azulA";
              break;
      }
      this.indSec++;
      //this.timeout();
      setTimeout(() => {
          console.log('Test apaga color');
          this.reproduceSecuencia();
      }, 150);
      
    }
  
  enciendeColor(){
    switch(this.secuencia[this.indSec]){
        case 'verde':
        this.verde = "verdeE";
        console.log(this.indSec);
            break;
        case 'rojo':
        this.rojo = "rojoE";
        console.log(this.indSec);
            break;
        case 'amarillo':
        this.amarillo = "amarilloE";
        console.log(this.indSec);
            break;
        case 'azul':
        this.azul = "azulE";
        console.log(this.indSec);
            break;
    }
      setTimeout(() => {
          console.log('Test enciende color');
          this.apagaColor();
      }, 700);
  }
  
  
  
  
  compruebaPulsacion(ev){
      var pulsador = ev.target;
      if(pulsador.id != 'aparato'){
          if(pulsador.id == this.secuencia[this.indSec]){       // Si se pulsa el pulsador correcto...
              this.enciendePulsador(pulsador.id);
          }
          else{                                       // ERROR, y enciende a rojo todos los pulsadores
            this.verde = "rojoE";
            this.rojo = "rojoE";
            this.amarillo = "rojoE";
            this.azul = "rojoE";
            //this.salida.innerHTML = 'HAS PERDIDO.\n\nHas llegado al nivel ' + this.nivel + '.\n\nHaz clic en EMPEZAR para volver a jugar';
            this.aparato.removeEventListener('click', this.compruebaPulsacion);
            //this.empezar.style.cssText = 'display: block;';          // se vuelve a mostrar el botón "EMPEZAR"
          }
      }
  
  
  }
  
  
  apagaPulsador(pulsador){
      switch(pulsador){
          case 'verde':
          this.verde = "verdeA";
              break;
          case 'rojo':
          this.rojo = "rojoA";
              break;
          case 'amarillo':
          this.amarillo = "amarilloA";
              break;
          case 'azul':
          this.azul = "azulA";
              break;
      }
      this.indSec++;
      if(this.indSec == this.secuencia.length){             // Si ya no queda secuencia, Nivel superado
        this.nivel++;                                // se pasa al siguiente nivel
        this.salida.innerHTML = 'NIVEL ' + this.nivel;
          this.aniadeColorSecuencia();                 // se añade un nuevo color al final de la secuencia
          this.indSec = 0;                             // y se resetea el índice de la misma
          //this.aparato.removeEventListener('click', this.compruebaPulsacion());   // se elimina el escuchador de evento clic
          setTimeout(this.reproduceSecuencia(), 1000);   // y se programa que tras un segundo se reproduzca la secuencia, repitiéndose así el proceso
      }
  }
  
  
  
  enciendePulsador(pulsador){
      switch(pulsador){
          case 'verde':
          this.verde = "verdeE"
              break;
          case 'rojo':
          this.rojo = "rojoE";
              break;
          case 'amarillo':
          this.amarillo = "amarilloE";
              break;
          case 'azul':
          this.azul = "azulE";
              break;
      }
      setTimeout(this.apagaPulsador(pulsador), 150, pulsador);
  }
  
  
  
  
  
  reproduceSecuencia(){
    if(this.indSec < this.secuencia.length){      // Si quedan colores por encender en la reproducción de la secuencia...
        this.enciendeColor();
    }
    else{                               // Secuencia reproducida, ahora le toca al jugador repetirla
      this.indSec = 0;
      var compruebaPulsacion = this.compruebaPulsacion(this.indSec);
      this.aparato.addEventListener('click', this.compruebaPulsacion);
      //this.aparato.addEventListener('click', this.compruebaPulsacion()); ASI 
    }
  
  
  
  }
  
    comienzaPartida(){
        //this.empezar.style.cssText = 'display: none;';           // se oculta el botón "EMPEZAR"
        this.reseteaAparato();
        this.aniadeColorSecuencia();
        this.reproduceSecuencia();
    }
  
  /*
    timeout() {
      setTimeout(() => {
          console.log('Test');
          this.timeout();
      }, 1000);
  }
  */
  
  
  

  ngOnInit() {
  }



}



