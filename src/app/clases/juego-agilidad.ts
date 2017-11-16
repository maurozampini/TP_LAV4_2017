export class JuegoAgilidad {

    nombre: string;
    numero1: number = 0;
    numero2: number = 0;
    operadorNumero: number = 0;
    operadorCaracter: any;
    contador: number = 0;
    gano: boolean;
    jugador: string;
    numeroIngresado: number;
    respuesta: Array<number> = new Array<number>();
    correcto: number = 0;
    incorrecto: number = 0;
    ronda: number = 0;
    
    constructor(unNombre:string,jugador:string,gano:boolean) 
    { 
      this.nombre = unNombre;
      this.jugador=jugador;
      this.gano= gano;
    }
    
    GenerarNuevo()
    {
        this.ronda++;
        this.numero1 = Math.floor(Math.random() * 50);
        this.numero2 = Math.floor(Math.random() * 50);
    }

    GenerarOperador()
    {
        this.operadorNumero = Math.floor(Math.random() * 3);
        switch(this.operadorNumero)
        {
            case 0: 
                this.operadorCaracter="+";
                this.respuesta.push(this.numero1 + this.numero2);
                console.info("respuesta: ", this.respuesta);
                break;
    
            case 1: 
                this.operadorCaracter="-";
                this.respuesta.push(this.numero1 - this.numero2);
                console.info("respuesta: ", this.respuesta);
                break;
    
            case 2: 
                this.operadorCaracter="*";
                this.respuesta.push(this.numero1 * this.numero2);
                console.info("respuesta: ", this.respuesta);
                break;
    
            case 3: 
                this.operadorCaracter="/";
                this.respuesta.push(this.numero1 / this.numero2);
                console.info("respuesta: ", this.respuesta);
                break;
        }
    }
    
    Jugar(){
        this.GenerarNuevo();
        this.GenerarOperador();
        console.info(this.respuesta);
    }
    
    Siguiente()
    {   
        this.contador++;
        console.info("contador: " + this.contador);
        if(this.contador<3)
        {
            
            if(this.numeroIngresado == this.respuesta[this.respuesta.length-1]){
                this.correcto++;
                console.info("numero Ingresado: " + this.numeroIngresado);
                console.info("Correcto: " + this.correcto);
            }
            else{
                this.incorrecto++;
                console.info("Incorrecto: " + this.incorrecto);
                console.info("NumeroIngresado: " + this.numeroIngresado);
                console.info("Respuesta: " + this.respuesta[this.respuesta.length-1]);
            }
    
            if(this.contador<=2)
            this.Jugar();
        }
        this.Verificar();
       // console.info("contador: " + this.contador);
    }

    Verificar()
    {
        if(this.correcto > this.incorrecto)
        {
            this.gano=true;
        }
        else{
            this.gano=false;
        }
    }
}
