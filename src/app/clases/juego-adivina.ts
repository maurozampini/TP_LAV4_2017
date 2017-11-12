export class JuegoAdivina {
  
  nombre: string;
  numeroSecreto: number;
  gano: boolean;
  jugador: string;
  numeroIngresado:number;
  validador: boolean=false;
  
   constructor(unNombre: string, jugador: string, gano: boolean) 
    { 
      this.nombre = unNombre;
      this.jugador= jugador;
      this.gano= gano;
    }
    
  
  GenerarNuevo()
  {
      this.validador=false;
      this.numeroSecreto=Math.floor(Math.random()*100);
      console.info("numero: ",this.numeroSecreto);
  }
  
  Verificar(){
  
  this.validador=true;
  
  if(this.numeroIngresado == this.numeroSecreto)
  {
      this.gano=true;
      return true;
      }
  this.gano=false;
  return false;
  }
  
  
  
  }
