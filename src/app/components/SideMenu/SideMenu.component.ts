import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'side-menu-component',
  templateUrl: './SideMenu.component.html',
  styleUrls: ['./SideMenu.component.css']
})
export class SideMenuComponent {
  title = '';

  @ViewChild("sidenav") sidenav: MatSidenavModule;

  toggleSideNav() {
    console.log("open");
  }
}
