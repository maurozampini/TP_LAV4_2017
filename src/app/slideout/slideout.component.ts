import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../user/user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
interface AppState {
  user: User;
}

@Component({
  selector: 'app-slideout',
  templateUrl: './slideout.component.html',
  styleUrls: ['./slideout.component.css']
})
export class SlideoutComponent implements OnInit {
  user: Observable<User>;

  constructor(private store: Store<AppState>, private auth: AngularFireAuth,  private router: Router ) {
    this.user = this.store.select('user');
  }

  logout() {
    this.auth.auth.signOut()
      .then(_ => {
        this.router.navigate([`/login`]);
      });
  }
  ngOnInit() {
  }
}
