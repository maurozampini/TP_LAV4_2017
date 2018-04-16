import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavToService {

  constructor(private router: Router) { }

  home = () => this.router.navigate([`/home`]);
  login = () => this.router.navigate([`/login`]);
  game = () => this.router.navigate([`/colores`]);
  adivina = () => this.router.navigate([`/adivina`]);
  agilidad = () => this.router.navigate([`/agilidad`]);
  anagrama = () => this.router.navigate([`/anagrama`]);
  piedraPapelTijera = () => this.router.navigate([`/piedraPapelTijera`]);
  tateti = () => this.router.navigate([`/tateti`]);
  quienSoy = () => this.router.navigate([`/quienSoy`]);
  listado = () => this.router.navigate([`/listado`]);  
}
