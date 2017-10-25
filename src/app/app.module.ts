import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatIcon} from '@angular/material';
import {MatProgressBarModule, MatInputModule} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { ListgamesComponent } from './listgames/listgames.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material';
import { SlideoutComponent } from './slideout/slideout.component';

import {StoreModule} from '@ngrx/store';
import {userReducer} from './user/user.reducer';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { ErrorService } from './services/error.service';
import { ValidatefieldsService } from './services/validatefields.service';
import { AuthService } from './services/auth.service';
import { SwalService } from './services/swal.service';
import { NavToService } from './services/nav-to.service';
import { StoreService } from './services/store.service';
import { CreateControlsService } from './services/create-controls.service';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ListgamesComponent }
];

const config = {
  apiKey: 'AIzaSyDv5H4Oq-Ni6YeYL8LxQPtM4Dv4rUl1pYY',
  authDomain: 'recreativa-97aae.firebaseapp.com',
  databaseURL: 'https://recreativa-97aae.firebaseio.com',
  projectId: 'recreativa-97aae',
  storageBucket: 'recreativa-97aae.appspot.com',
  messagingSenderId: '752023954146'
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
    SlideoutComponent
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
    AngularFirestoreModule,
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
    CreateControlsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
