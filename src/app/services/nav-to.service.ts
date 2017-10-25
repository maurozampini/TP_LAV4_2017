import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavToService {

  constructor(private router: Router) { }

  home = () => this.router.navigate([`/home`]);
  login = () => this.router.navigate([`/login`]);
}
