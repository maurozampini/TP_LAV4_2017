import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from '@ngrx/store';
import * as UserActions from '../user/user.actions';
import { User } from '../user/user.model';


interface AppState {
  user: User;
}

@Injectable()
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private store: Store<AppState>) { }

  signInWhitEmailAndPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, password)
        .then( res => resolve(res))
        .catch( err => reject(err));
    });
  }

  registerWhitEmailAndPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(email, password)
        .then( res => resolve(res))
        .catch( err => reject(err));
    });
  }
}
