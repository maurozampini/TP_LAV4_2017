import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { ValidatefieldsService } from '../services/validatefields.service';
import { CreateControlsService } from '../services/create-controls.service';
import { SwalService } from '../services/swal.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = false;

  controls: FormControl[] = [];
  email: FormControl;
  password: FormControl;
  passwordAgain: FormControl;

  constructor(
    private afAuth: AuthService,
    private validate: ValidatefieldsService,
    private addControl: CreateControlsService,
    private swal: SwalService,
    private err: ErrorService) {
    this.email = this.addControl.email();
    this.password = this.addControl.password();
    this.passwordAgain = this.addControl.password();
    this.controls.push(this.email);
    this.controls.push(this.password);
    this.controls.push(this.passwordAgain);
    }

  signUs() {
    this.isLoading = true;
    if (!this.validate.validateFields(this.controls) || this.password.value !== this.passwordAgain.value) {
      this.swal.defaultAlertWithIcon('error', 'Complete todos los campos');
      this.isLoading = false;
      return;
    }
    this.afAuth.registerWhitEmailAndPassword(this.email.value, this.password.value)
      .then(val => {
        this.swal.defaultAlertWithIcon('success', 'Registro exitoso!');
        // this.navTo.home();
      })
      .catch(val => console.log(val))
      .then( _ => this.isLoading = false);
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
