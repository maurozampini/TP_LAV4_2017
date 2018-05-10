import { Juego } from '../clases/juego';
import { Util } from './util';

export class Tateti extends Juego {
    
    cantTurnos : number = 9;
    turno : number = -1;
    juego : Array<any>;
    circulo : number = 0;
    equis : number = 1;
    maquinaJugador : number = -1;
    cantTurnosJugados : number = 0;

    constructor() {
        super("TA - TE - TI");
        this.nuevo();
    }

    nuevo() {
        this.juego = new Array();
        this.turno = -1;
        this.cantTurnosJugados = 0;
        for(var i = 0; i < 3; i++) {
            this.juego[i] = new Array();
            for(var j = 0; j < 3; j++) {
                this.juego[i][j] = { value : -1 };
            }
        }
    }

    reiniciar() {
        this.turno = -1;
        this.cantTurnosJugados = 0;
        this.juego.forEach(element => {
            element.forEach(juego => {
                juego.value = -1;
            });
        })
    }

    aQuienLeToca() {
        this.generarTurno();
        return this.turno;
    }

    validarJuego(jugador) {
        var ret = false;
        if(this.juego[0][0].value == jugador) {
            ret = this.juego[0][0].value == jugador && this.juego[0][1].value == jugador && this.juego[0][2].value == jugador;
            if(!ret) {
                ret = this.juego[0][0].value == jugador && this.juego[1][0].value == jugador && this.juego[2][0].value == jugador;
                if(!ret) {
                    ret = this.juego[0][0].value == jugador && this.juego[1][1].value == jugador && this.juego[2][2].value == jugador;
                }
            }
        } else if (this.juego[0][1].value == jugador) {
            ret = this.juego[0][1].value == jugador && this.juego[1][1].value == jugador && this.juego[2][1].value == jugador;
        } else if (this.juego[0][2].value == jugador) {
            ret = this.juego[0][2].value == jugador && this.juego[1][2].value == jugador && this.juego[2][2].value == jugador;
            if(!ret) {
                ret = this.juego[0][2].value == jugador && this.juego[1][1].value == jugador && this.juego[2][0].value == jugador;
            }
        } else if (this.juego[1][0].value == jugador) {
            ret = this.juego[1][0].value == jugador && this.juego[1][1].value == jugador && this.juego[1][2].value == jugador;
        } else if (this.juego[2][0].value == jugador) {
            ret = this.juego[2][0].value == jugador && this.juego[2][1].value == jugador && this.juego[2][2].value == jugador;
        }
        return ret;
    }

    generarTurno() {
        if(this.turno == -1) {
            this.turno = Util.numeroAleatorio(0, 1);
            this.maquinaJugador = this.turno == 1 ? 0 : 1;
        } else {
            this.turno = this.turno == 1 ? 0 : 1;
        }
    }

    verificar() {
        return false;
    }

    asignarPosicion(pos) {
        this.juego[pos.x][pos.y].value = this.turno;
    }

    asignarPosicionMaquina() {
        var count = 0;
        var posx = Util.numeroAleatorio(0, 2);
        var posy = Util.numeroAleatorio(0, 2);
        console.log({x: posx, y: posy});
        while(this.juego[posx][posy].value != -1 && count < 100) {
            posx = Util.numeroAleatorio(0, 2);
            posy = Util.numeroAleatorio(0, 2);
            console.log({x: posx, y: posy});
            count++;
        }
        this.asignarPosicion({ x: posx, y : posy });
    }
}