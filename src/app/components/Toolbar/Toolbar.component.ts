import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'toolbar-component',
  templateUrl: './Toolbar.component.html',
  styleUrls: ['./Toolbar.component.css']
})
export class ToolbarComponent {
  title = 'Build-A-Beer';

  openMenu() {
    //service.openMenu();
    console.log("menu button clicked");
  }
}
