import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  emailRequired = 'Ingrese un correo electronico.';
  emailInvalid = 'Correo electrónico invalido.';

  passwordRequired = 'Contraseña invalida';
  passwordsEquals = 'Las contraseñas deben ser iguales.';
  passwordLenght = 'Debe contener al menos 8 caracteres.';

  fieldsRequired = 'Complete los campos';
  constructor() { }

  getErrorMessageEmail(email) {
    return email.hasError('required')
      ? this.emailRequired
      : email.hasError('email')
        ? this.emailInvalid
        : '';
  }

  getErrorMessagePassword(password) {
    return password.hasError('required')
      ? this.passwordRequired
      : password.hasError('minlength')
        ? this.passwordLenght
        : '';
  }

  getErrorMessagePasswordEquals(password, passwordAgain) {
    return password.value !== passwordAgain.value
      ? this.passwordsEquals
      : '';
  }
}
