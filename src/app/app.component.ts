import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

  
})
export class AppComponent {

  profile = {
    name: 'Vinicius Pires',
    email: 'viniciuspires@gmail.com',
  };

  public appPages = [];
  constructor(

    private navCtrl: NavController,
    public menuCtrl: MenuController
  ) {}


 
}
