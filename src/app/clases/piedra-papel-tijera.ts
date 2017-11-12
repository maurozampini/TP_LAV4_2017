import { Juego } from '../clases/juego';


export class PiedraPapelTijera {

    nombre: string;
    jugador: string;
    gano: boolean;

    numeroRandom: number=0;
    piedra: number=1;
    papel: number=2;
    tijera: number=3;
    resultado: string;

    constructor(unNombre?: string, jugador?: string, gano?: boolean) 
    { 
      this.nombre = unNombre;
      this.jugador= jugador;
      this.gano= gano;
    }
    

    Comenzar()
    {
        this.numeroRandom=Math.floor((Math.random()*3)+1);
    }

    Piedra()
    {   
        this.Comenzar();
        
        if(this.numeroRandom==1)
        {
            this.resultado="Empato";
            this.gano=false;
        }
        if(this.numeroRandom==2)
        {
            this.gano=false;
            this.resultado="Perdio";
        }
        if(this.numeroRandom==3)
        {   
            this.gano=true;
            this.resultado="Gano";
        }
    }

    Papel()
    {
        this.Comenzar();

        if(this.numeroRandom==1)
        {
            this.gano=true;
            this.resultado="Gano";
        }
        if(this.numeroRandom==2)
        {
            this.gano=false;
            this.resultado="Empato";
        }
        if(this.numeroRandom==3)
        {
            this.gano= false;
            this.resultado="Perdio";
        }
    }

    Tijera()
    {
        this.Comenzar();

        if(this.numeroRandom==1)
        {
            this.gano=false;
            this.resultado="Perdio";
        }
        if(this.numeroRandom==2)
        {
            this.gano=true;
            this.resultado="Gano";
        }
        if(this.numeroRandom==3)
        {
            this.resultado="Empato";
        }
    }

    MostrarResultado()
    {

    }

}
