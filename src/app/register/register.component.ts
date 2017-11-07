import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  options: FormGroup;
  isLoading = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passwordAgain = new FormControl('', [Validators.required]);

  constructor(private auth: AngularFireAuth) {
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Ingrese un email.' :
        this.email.hasError('email') ? 'Ejemplo: correo@gmail.com' :
            '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Ingrese una contraseña.' :
      this.password.hasError('minlength') ? 'Debe contener al menos 8 caracteres.' :
      '';
  }

  getErrorMessagePasswordAgain() {
    return this.password.value !== this.passwordAgain.value ? 'Las contraseñas tienen que ser iguales.'
      : '';
  }

  login() {
    if (this.email.invalid || this.password.invalid || this.password.value !== this.passwordAgain.value) {
      alert('Complete correctamente los datos');
      return;
    }
    this.setControlEnabled(false);
    this.isLoading = true;
    this.auth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(res => {
        alert('Al toq prrro');
        console.log(res);
      })
      .catch(err  => {
        this.setControlEnabled(true);
        alert('La cagaste en algo.');
        console.log(err);
      })
      .then( () => this.isLoading = false);
  }


  setControlEnabled(enable: boolean) {
    if (enable) {
      this.email.enable();
      this.password.enable();
      this.passwordAgain.enable();
    } else {
      this.email.disable();
      this.password.disable();
      this.passwordAgain.disable();
    }
  }

  ngOnInit() {
  }
}
