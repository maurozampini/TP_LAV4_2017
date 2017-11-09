import { Injectable } from '@angular/core';

@Injectable()
export class ValidatefieldsService {

  constructor() { }

  validateFields(array: any) {
    let ret = true;
    for (let index = 0; index < array.length; index++) {
      if (array[index].invalid) {
        ret = false;
      }
    }
    return ret;
  }

}
