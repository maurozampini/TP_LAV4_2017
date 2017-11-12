export class JuegoColores {

    nombre: string;
    jugador: string;
    gano: boolean;

    constructor(unNombre?: string, jugador?: string, gano?: boolean) 
    { 
      this.nombre = unNombre;
      this.jugador= jugador;
      this.gano= gano;
    }
}
