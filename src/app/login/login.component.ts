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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoading = false;
  items: Observable<any[]>;
  item;
  controls: FormControl[] = [];
  email: FormControl;
  password: FormControl;

  usuarioTest: string;
  passwordTest: string;
  selectedUser: string;

  showNavEvent = new Event('showNav');
  hideNavEvent = new Event('hideNav');

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
    dispatchEvent(this.hideNavEvent);
    this.item = db.object('items/item');
    this.item.valueChanges();
    // this.items = db.collection('items').valueChanges();
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
        this.swal.defaultAlertWithIcon('success', 'Bienvenido!');
        this.navTo.home();
      })
      .catch(val => console.log(val))
      .then( _ => this.isLoading = false);
  }

  SeleccionarUsuario(){
    switch(this.selectedUser){
      case "admin":{
        this.usuarioTest="admin@admin.com";
        this.passwordTest="222222";
        break;
      }
      case "usuario":{
        this.usuarioTest="usuario@usuario.com";
        this.passwordTest="111111";
        break;
      }
      case "invitado":{
        this.usuarioTest="invitado@invitado.com";
        this.passwordTest="333333";
        break;
      }                
      case "jugador1":{
        this.usuarioTest="j1@jugador.com";
        this.passwordTest="444444";
        break;
      }
      case "jugador2" :{
        this.usuarioTest="j2@jugador.com";
        this.passwordTest="555555";
        break;
      }        
    }
  }

  ngOnInit() {
  }
}
