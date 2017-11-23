import { LoginComponent } from "../login/login.component";

export abstract class Juego{
    public nombre: string;
    public jugador: string;
    public gano: boolean = false;

    constructor(nombre?: string, jugador?: string, gano?: boolean)
    {
        this.nombre = nombre;
        this.jugador = jugador;
        this.gano = gano;
    }

    public abstract verificar():boolean;

    public retornarAyuda(){
        return "No hay ayuda definida";
    }
}