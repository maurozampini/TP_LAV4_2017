import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../user/user.actions';
import { User } from '../user/user.model';
interface AppState {
  user: User;
}
@Injectable()
export class StoreService {

  constructor(private store: Store<AppState>) { }

  loadStoreUid(uid: string) {
    this.store.dispatch(new UserActions.Create(uid));
  }
}
