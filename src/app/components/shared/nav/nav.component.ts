import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items : NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {link: '/home', title: "home", icon:'home'},
      {link: '/capacity', title:"Capacity", icon:'grid-outline'},
      {link: '/newUser', title:"New User", icon:'star'}
    ]
  }

}
