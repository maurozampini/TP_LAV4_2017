import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user.model';
import { Store } from '@ngrx/store';
import * as UserActions from '../user/user.actions';
import { NavToService } from '../services/nav-to.service';
import {Location} from '@angular/common';
declare var jquery: any;
declare var $: any;


interface AppState {
  user: User;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar;
  sticky;
  show = false;
  user$: Observable<User>;

  constructor(private store: Store<AppState>, private navTo: NavToService, private _location: Location) {
  


    this.stickyNavBar();
    addEventListener('showNav', () => {
      console.log('Mostrar');
      this.show = true;
      this.initSideNav();
    });
    addEventListener('hideNav', () => {
      console.log('Ocultar');
      this.show = false;
      $('.button-collapse').sideNav('destroy');
    });
    this.user$ = this.store.select('user');
    console.log(this.user$);
  }

  volver(){
    if (!this._location.isCurrentPathEqualTo('/home'))
    {
      this._location.back();
    }
  }

  goToQuienSoy() {
    this.navTo.quienSoy();
  }

  goToListado() {
    this.navTo.listado();
  }

  editText() {
    this.store.dispatch(new UserActions.Create('RowdyRuffBoy'));
  }

  stickyNavBar() {
    addEventListener('scroll', () => {
      this.sticky < window.pageYOffset
        ? this.navbar.classList.add('sticky')
        : this.navbar.classList.remove('sticky');
      });
  }

  ngOnInit() {
    this.navbar = document.getElementById('navbar');
    this.sticky = this.navbar.offsetTop;
  }

  initSideNav() {
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
     // edge: 'lefth', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff* */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff* */ }, // A function to be called when sideNav is closed
    });
  }
}
