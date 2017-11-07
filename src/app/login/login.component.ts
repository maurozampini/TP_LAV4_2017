import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options: FormGroup;
  isLoading = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  showNavEvent = new Event('showNav');

  constructor(private auth: AngularFireAuth) {
    dispatchEvent(this.showNavEvent);
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Ingrese una contraseña.' :
      this.password.hasError('minlength') ? 'Debe contener al menos 8 caracteres.' :
      '';
  }

  login() {
    this.isLoading = true;
    if (this.email.invalid || this.password.invalid) {
      alert('Complete correctamente los datos');
      this.isLoading = false;
      return;
    }

    this.auth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(res => alert('Todo ok'))
      .catch(err  => alert('La cagaste'))
      .then( () => this.isLoading = false);
  }

  ngOnInit() {
  }
}
