import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { StoreService } from '../services/store.service';
import { NavToService } from '../services/nav-to.service';
import { ErrorService } from '../services/error.service';
import { SwalService } from '../services/swal.service';
import { ValidatefieldsService } from '../services/validatefields.service';
import { CreateControlsService } from '../services/create-controls.service';
import { AngularFireDatabase } from 'angularfire2/database';
import '../../assets/login-animation.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userName: string;

  isLoading = false;
  items: Observable<any[]>;
  item;
  controls: FormControl[] = [];
  email: FormControl;
  password: FormControl;

  usuarioTest: string;
  passwordTest: string;
  selectedUser: string;

  constructor(
    private afAuth: AuthService,
    private validate: ValidatefieldsService,
    private navTo: NavToService,
    private storage: StoreService,
    private err: ErrorService,
    private swal: SwalService,
    private db: AngularFireDatabase,
    private addControl: CreateControlsService) {
    this.email = this.addControl.email();
    this.password = this.addControl.password();
    this.controls.push(this.email);
    this.controls.push(this.password);
    this.item = db.object('items/item');
    this.item.valueChanges();
  }

  ngAfterViewInit() {
    (window as any).initialize();
  }

  signIn() {
    console.log(this.item.val);
    this.isLoading = true;
    if (!this.validate.validateFields(this.controls)) {
      this.swal.defaultAlertWithIcon('error', 'Complete todos los campos');
      this.isLoading = false;
      return;
    }
    this.afAuth.signInWhitEmailAndPassword(this.email.value, this.password.value)
      .then(val => {
        this.storage.loadStoreUid(val.uid);
        this.swal.defaultAlertWithIcon('success', '¡Bienvenido!');
        this.navTo.home();
        var email = localStorage.setItem("usuario", this.email.value);
        console.log(this.email.value);
      })
      .catch(val => {
        this.showAlert(val.message, "Error al ingresar");
        console.log(val)
      })
      .then( _ => this.isLoading = false);
  }

  showAlert(mensaje: string, titulo: string)
  {
    switch(mensaje)
    {
      case "The email address is badly formatted.":
      {
        mensaje = "El email no contiene un formato correcto";
        break;
      }

      case "The password is invalid or the user does not have a password.":
      {
        mensaje = "La clave es incorrecta, intente nuevamente";
        break;        
      }

      case "There is no user record corresponding to this identifier. The user may have been deleted.":
      {
        mensaje = "Usuario inexistente.";
        break;        
      }
    }

    this.swal.defaultAlertWithIcon('error', mensaje);
  }

  Test(){
    this.usuarioTest="a@a.com";
    this.passwordTest="12345678";
  }

  ngOnInit() {
  }
}
