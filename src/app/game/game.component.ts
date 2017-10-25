import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as UserActions from '../user/user.actions';
interface AppState {
  user: User;
}


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<AppState>) { }
  goToGame() {
    this.testReducer();
  }

  testReducer() {
    this.store.dispatch(new UserActions.Create('RowdyRuff'));
  }

  ngOnInit() {
  }

}
