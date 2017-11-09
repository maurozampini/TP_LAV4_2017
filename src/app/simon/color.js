// Se crean referencias para los cuatro pulsadores y demás elementos a fin de mejorar la legibilidad del código en los sucesivo..
pulsVerde = document.querySelector('#verde');
pulsRojo = document.querySelector('#rojo');
pulsAmarillo = document.querySelector('#amarillo');
pulsAzul = document.querySelector('#azul');
aparato = document.querySelector('#aparato');
empezar = document.querySelector('#empezar');
salida = document.querySelector('#salida');
// variables con los estilos CSS para los cuatro pulsadores en ambos estados: apagado y encendido...
verdeApagado = 'background: #049E03';
verdeEncendido = 'background: #4EFE4E; transform: scale(1.05);';
rojoApagado = 'background: #AE0404';
rojoEncendido = 'background: #FD2D2D; transform: scale(1.05);';
amarilloApagado = 'background: #CAC902';
amarilloEncendido = 'background: #FDFD13; transform: scale(1.05);';
azulApagado = 'background: #0404A6';
azulEncendido = 'background: #4A4AFD; transform: scale(1.05);';
nivel;          // indica el nivel actual
secuencia;      // array con los colores a repetir
indSec;         // índice de la secuencia de colores

// Se programa que cuando se cliqueé el botón "COMENZAR" comienze la partida...
function empezarJuego(){
this.empezar.addEventListener("click", this.comienzaPartida);
}
function comienzaPartida(){
//this.empezar.style.cssText = 'display: none;';           // se oculta el botón "EMPEZAR"
reseteaAparato();
aniadeColorSecuencia();
reproduceSecuencia();
function reseteaAparato(){
 this.nivel = 1;
 this.secuencia = [];
 this.indSec = 0;
 this.pulsVerde.style.cssText = this.verdeApagado;
 this.pulsRojo.style.cssText = this.rojoApagado;
 this.pulsAmarillo.style.cssText = this.amarilloApagado;
 this.pulsAzul.style.cssText = this.azulApagado;
 this.salida.innerHTML = 'NIVEL ' + this.nivel;
}
function aniadeColorSecuencia(){
    var colores = ['verde', 'rojo', 'amarillo', 'azul'];
    this.secuencia.push( colores[numAleat(0,3)] );   // se añade un color aleatorio al final del array
}
function reproduceSecuencia(){
    if(this.indSec < this.secuencia.length){      // Si quedan colores por encender en la reproducción de la secuencia...
        enciendeColor();
    }
    else{                               // Secuencia reproducida, ahora le toca al jugador repetirla
     this.indSec = 0;
        this.aparato.addEventListener('click', compruebaPulsacion);
    }
    function enciendeColor(){
        switch(this.secuencia[this.indSec]){
            case 'verde':
                this.pulsVerde.style.cssText = this.verdeEncendido;
                break;
            case 'rojo':
                this.pulsRojo.style.cssText = this.rojoEncendido;
                break;
            case 'amarillo':
                this.pulsAmarillo.style.cssText = this.amarilloEncendido;
                break;
            case 'azul':
                this.pulsAzul.style.cssText = this.azulEncendido;
                break;
        }
        setTimeout(apagaColor, 700);
    }
    function apagaColor(){
        switch(this.secuencia[this.indSec]){
            case 'verde':
                this.pulsVerde.style.cssText = this.verdeApagado;
                break;
            case 'rojo':
                this.pulsRojo.style.cssText = this.rojoApagado;
                break;
            case 'amarillo':
                this.pulsAmarillo.style.cssText = this.amarilloApagado;
                break;
            case 'azul':
                this.pulsAzul.style.cssText = this.azulApagado;
                break;
        }
        this.indSec++;
        setTimeout(reproduceSecuencia, 150);
    }
    function compruebaPulsacion(ev){
        var pulsador = ev.target;
        if(pulsador.id != 'aparato'){
            if(pulsador.id == this.secuencia[this.indSec]){       // Si se pulsa el pulsador correcto...
                enciendePulsador(pulsador.id);
            }
            else{                                       // ERROR, y enciende a rojo todos los pulsadores
             this.pulsVerde.style.cssText = this.rojoEncendido;
             this.pulsRojo.style.cssText = this.rojoEncendido;
             this.pulsAmarillo.style.cssText = this.rojoEncendido;
             this.pulsAzul.style.cssText = this.rojoEncendido;
             this.salida.innerHTML = 'HAS PERDIDO.\n\nHas llegado al nivel ' + this.nivel + '.\n\nHaz clic en EMPEZAR para volver a jugar';
             this.aparato.removeEventListener('click', compruebaPulsacion);
             this.empezar.style.cssText = 'display: block;';          // se vuelve a mostrar el botón "EMPEZAR"
            }
        }
        function enciendePulsador(pulsador){
            switch(pulsador){
                case 'verde':
                this.pulsVerde.style.cssText = this.verdeEncendido;
                    break;
                case 'rojo':
                this.pulsRojo.style.cssText = this.rojoEncendido;
                    break;
                case 'amarillo':
                this.pulsAmarillo.style.cssText = this.amarilloEncendido;
                    break;
                case 'azul':
                this.pulsAzul.style.cssText = this.azulEncendido;
                    break;
            }
            setTimeout(apagaPulsador, 150, pulsador);
        }
        function apagaPulsador(pulsador){
            switch(pulsador){
                case 'verde':
                this.pulsVerde.style.cssText = this.verdeApagado;
                    break;
                case 'rojo':
                this.pulsRojo.style.cssText = this.rojoApagado;
                    break;
                case 'amarillo':
                this.pulsAmarillo.style.cssText = this.amarilloApagado;
                    break;
                case 'azul':
                this.pulsAzul.style.cssText = this.azulApagado;
                    break;
            }
            this.indSec++;
            if(this.indSec == this.secuencia.length){             // Si ya no queda secuencia, Nivel superado
             this.nivel++;                                // se pasa al siguiente nivel
             this.salida.innerHTML = 'NIVEL ' + this.nivel;
                aniadeColorSecuencia();                 // se añade un nuevo color al final de la secuencia
                this.indSec = 0;                             // y se resetea el índice de la misma
                this.aparato.removeEventListener('click', compruebaPulsacion);   // se elimina el escuchador de evento clic
                setTimeout(reproduceSecuencia, 1000);   // y se programa que tras un segundo se reproduzca la secuencia, repitiéndose así el proceso
            }
        }
    }
}
function numAleat(limInf, limSup){
    return limInf + Math.floor( Math.random() * (limSup - limInf + 1) );
}
}