import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public menuCtrl: MenuController
  ) {  }

  ngOnInit() {
  }

  showLogPage(){
    this.navCtrl.navigateForward('register')
  }

  showHomePage(){
    this.navCtrl.navigateForward('home')
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);

  }

}
