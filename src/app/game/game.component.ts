import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as UserActions from '../user/user.actions';
import { NavToService } from '../services/nav-to.service';
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

  constructor(private store: Store<AppState>, private navTo: NavToService) { }
  goToGame() {
    this.navTo.game();
  }

  goToAdivina() {
    this.navTo.adivina();
  }

  goToAgilidad() {
    this.navTo.agilidad();
  }

  goToAnagrama() {
    this.navTo.anagrama();
  }

  goToPiedraPapelTijera() {
    this.navTo.piedraPapelTijera();
  }

  testReducer() {
    this.store.dispatch(new UserActions.Create('RowdyRuff'));
  }

  ngOnInit() {
  }

}
