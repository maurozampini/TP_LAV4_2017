import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatIcon} from '@angular/material';
import { MatProgressBarModule, MatInputModule} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { ListgamesComponent } from './listgames/listgames.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule} from '@angular/material';
import { SlideoutComponent } from './slideout/slideout.component';

import {StoreModule} from '@ngrx/store';
import {userReducer} from './user/user.reducer';

import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { ErrorService } from './services/error.service';
import { ValidatefieldsService } from './services/validatefields.service';
import { AuthService } from './services/auth.service';
import { SwalService } from './services/swal.service';
import { NavToService } from './services/nav-to.service';
import { StoreService } from './services/store.service';
import { CreateControlsService } from './services/create-controls.service';
import { ArrowPipe } from './arrow.pipe';
import { WhoiamComponent } from './whoiam/whoiam.component';
import { RouteErrorComponent } from './route-error/route-error.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';
import { JuegoServiceService } from './servicios/juego-service.service';
import { ColoresComponent } from './colores/colores.component';
import { AgilidadAritmeticaComponent } from './agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ListgamesComponent },
  { path: 'colores', component: ColoresComponent },
  { path: 'adivina', component: AdivinaElNumeroComponent },
  { path: 'agilidad', component: AgilidadAritmeticaComponent },
  { path: 'anagrama', component: AnagramaComponent },
  { path: 'piedraPapelTijera', component: PiedraPapelTijeraComponent }, 
  { path: 'whoiam', component: WhoiamComponent },
  { path: '*', component: RouteErrorComponent}
];

const config = {
  apiKey: "AIzaSyB8MSAKNgrNIypOY3VAfx1ELAMOkeYAGDM",
  authDomain: "tplaboratorio-aa43a.firebaseapp.com",
  databaseURL: "https://tplaboratorio-aa43a.firebaseio.com",
  projectId: "tplaboratorio-aa43a",
  storageBucket: "",
  messagingSenderId: "811038777855"
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListgamesComponent,
    GameComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SlideoutComponent,
    ArrowPipe,
    WhoiamComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    RouteErrorComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    MatSidenavModule,
    StoreModule.forRoot(
      {user: userReducer}),
      StoreDevtoolsModule.instrument({
        maxAge: 10
      })
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    ErrorService,
    ValidatefieldsService,
    AuthService,
    SwalService,
    NavToService,
    StoreService,
    JuegoServiceService,
    CreateControlsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
