import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable()
export class CreateControlsService {

  constructor() { }

  email = (): FormControl => new FormControl('', [Validators.required, Validators.email]);
  password = (): FormControl => new FormControl('', [Validators.required, Validators.minLength(6)]);

}
