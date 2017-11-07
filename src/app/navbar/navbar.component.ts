import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar;
  sticky;
  show = true;
  constructor() {
    this.showComponent();
    this.stickyNavBar();
  }
  showComponent() {
    addEventListener('showNav', () => {
      console.log('llego el evento');
      this.show = !this.show;
    });
  }

  stickyNavBar() {
    addEventListener('scroll', () => {
      this.sticky < window.pageYOffset
        ? this.navbar.classList.add('sticky')
        : this.navbar.classList.remove('sticky');
      });
  }

  ngOnInit() {
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
     // edge: 'lefth', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff* */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff* */ }, // A function to be called when sideNav is closed
    });

    this.navbar = document.getElementById('navbar');
    this.sticky = this.navbar.offsetTop;
  }
}
