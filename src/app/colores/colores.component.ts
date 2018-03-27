import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent{
  pulsVerde = document.querySelector('#verde');
  pulsRojo = document.querySelector('#rojo');
  pulsAmarillo = document.querySelector('#amarillo');
  pulsAzul = document.querySelector('#azul');
  aparato = <HTMLElement> document.querySelector('#aparato');
  empezar = "mostrar";
  perder = "noPerdiste";
  salida = <HTMLElement> document.querySelector('#salida');
  // variables para los cuatro pulsadores en estado apagado
  verde: string = "verdeA";
  rojo: string = "rojoA";
  amarillo: string = "amarilloA";
  azul: string = "azulA";
  nivel = 1;          // indica el nivel actual, se inicia en 1
  secuencia: string[];      // array con los colores a repetir
  indSec: number;         // índice de la secuencia de colores

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
    console.log('Test aumento velocidad al pasar de nivel');
    this.apagaColor();
}, 750 - (this.nivel * 50));

  // if(this.nivel > 3){
  //   setTimeout(() => {
  //       console.log('Test Si llego al nivel 3 aumenta velocidad color');
  //       this.apagaColor();
  //   }, 100);
  // }
  // else
  // {
  //     setTimeout(() => {
  //         console.log('Test todavia no llego al 3');
  //         this.apagaColor();
  //     }, 700);
  // }
}

compruebaPulsacion(ev){
    var pulsador = ev; //Asigné otra variable al pedo
    var pulso = <HTMLElement> document.querySelector('#aparato');
    console.log(pulsador);
    switch(pulsador){
      case 'verdeA':
      this.verde = "verdeA";
      var pulso = <HTMLElement> document.querySelector('#verde');
          break;
      case 'rojoA':
      this.rojo = "rojoA";
      var pulso = <HTMLElement> document.querySelector('#rojo');
          break;
      case 'amarilloA':
      this.amarillo = "amarilloA";
      var pulso = <HTMLElement> document.querySelector('#amarillo');
          break;
      case 'azulA':
      this.azul = "azulA";
      var pulso = <HTMLElement> document.querySelector('#azul');
          break;
  }

    if(pulso.id != 'aparato'){
        if(pulso.id == this.secuencia[this.indSec]){       // Si se pulsa el pulsador correcto se enciende el pulsador que toco
            this.enciendePulsador(pulso.id);
        }
        else{                                       // ERROR, y enciende a rojo todos los pulsadores
          this.verde = "rojoE";
          this.rojo = "rojoE";
          this.amarillo = "rojoE";
          this.azul = "rojoE";
          this.perder = "perdiste";
          //this.salida.innerHTML = 'HAS PERDIDO.\n\nHas llegado al nivel ' + this.nivel + '.\n\nHaz clic en EMPEZAR para volver a jugar';
          //this.aparato.removeEventListener('click', this.compruebaPulsacion);
          this.empezar = 'mostrar';          // se vuelve a mostrar el botón "EMPEZAR"
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
        this.aniadeColorSecuencia();                 // se añade un nuevo color al final de la secuencia
        this.indSec = 0;                             // y se resetea el índice de la misma
        //this.aparato.removeEventListener('click', this.compruebaPulsacion());   // se elimina el escuchador de evento clic
        //setTimeout(this.reproduceSecuencia(), 1000);   // y se programa que tras un segundo se reproduzca la secuencia, repitiéndose así el proceso
        setTimeout(() => {
          console.log('Test reproduce nueva secuencia');
          this.reproduceSecuencia();
      }, 1000);
    }
}

enciendePulsador(pulsador){
    console.log(pulsador + "estoy en enciende pulsador")
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
    //setTimeout(this.apagaPulsador(pulsador), 150, pulsador);
    setTimeout(() => {
      console.log('ENCIENDE PULSADOR QUE RECIBE PULSADOR');
      this.apagaPulsador(pulsador)
  }, 150);
}

reproduceSecuencia(){
  if(this.indSec < this.secuencia.length){      // Si quedan colores por encender en la reproducción de la secuencia...
      this.enciendeColor();
  }
  else{                               // Secuencia reproducida, ahora le toca al jugador repetirla
    this.indSec = 0;
    //var compruebaPulsacion = this.compruebaPulsacion(this.indSec);
    //this.aparato.addEventListener('click', this.compruebaPulsacion);
    //this.aparato.addEventListener('click', this.compruebaPulsacion);// ASI 
    //this.aparato.addEventListener("click", (e) => { this.compruebaPulsacion() });
    //aparato = <HTMLElement> document.querySelector('#aparato');
    //aparato.addEventListener('click', (e) => {
      //ejecuta()
  //}
  }
}

  comienzaPartida(){
      this.empezar = 'esconder';    // se oculta el botón "EMPEZAR"
      this.perder = 'noPerdiste';
      this.reseteaAparato();
      this.aniadeColorSecuencia();
      this.reproduceSecuencia();
  } 
}

