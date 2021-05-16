import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu.model';
import { menu } from './menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems:MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = menu;
  }

}
