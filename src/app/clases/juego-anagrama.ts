export class JuegoAnagrama {

    palabrasDesordenadas: Array<string> = new Array<string>();
    palabrasOrdenadas: Array<string> = new Array<string>();
    palabraAJugar: string;
    palabraDeUsuario:string='';
    gano: boolean;
    contador: number=0;
    numeroRandom:number=0;
    nombre: string='';
    jugador: string='';
    resultado: string='';


    constructor(unNombre?: string, jugador?: string, gano?: boolean)
    {
        this.nombre = unNombre;
        this.jugador= jugador;
        this.gano= gano;
    }


    Comenzar()
    {
        this.palabrasOrdenadas=[
            "COCINA",
            "PROGRAMACION",
            "ANGULAR",
            "ELECTRODOMESTICO",
            "RADIOGRAFIA",
            "CURTIEMBRE",
            "CASA",
            "PAJARO",
            "CUCHILLO",
            "DICCIONARIO",
            "ENRIEDO",
            "MURCIELAGO",
            "CALABAZA"];

        this.palabrasDesordenadas=[
            "INCOCA",
            "RAGORPCIMANO",
            "RALGNUA",
            "MESOCITELEORCTE",
            "DIARAOGRAFI",
            "BRETIEMCUR",
            "SCAA",
            "ROJPAA",
            "LILOHUCC",
            "CIDCIOROINA",
            "ODIENER",
            "GOLAICEURM",
            "ZALACABA"
        ];
        this.Next();
    }

    Next()
    {   
        this.numeroRandom=Math.floor((Math.random() * 12) + 0);
        this.palabraAJugar = this.palabrasDesordenadas[this.numeroRandom];
        
    }

    Verificar(unaPalabra: string)
    {   
        if(unaPalabra!='' && unaPalabra!= null){

            unaPalabra= unaPalabra.toUpperCase();
            console.log(unaPalabra);
            console.log(this.palabrasOrdenadas[this.numeroRandom])

            if(unaPalabra === this.palabrasOrdenadas[this.numeroRandom]){
                this.gano=true;
                this.resultado="GANO!"
                this.contador=0;
                console.log(this);
            }
            else{
                this.contador++;
            }

            if(this.contador==3)
            {
                this.gano=false;
                this.resultado="PERDIO!"
                this.Next();
            }
        }
    }   

    Rendirse()
    {   
        this.gano=false;
        this.resultado="PERDIO!"
        this.Next();
    }
    


}
