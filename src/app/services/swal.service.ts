import { Injectable } from '@angular/core';
import * as swal from 'sweetalert';

@Injectable()
export class SwalService {

  constructor() { }

  defaultAlertWithIcon(icon: string, text: string, timer: number = 1500) {
    swal({
      icon,
      text,
      timer
    });
  }

}
