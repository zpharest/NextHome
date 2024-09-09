import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( 
    private navCtrl: NavController,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  
  showLoginPage(){
    this.navCtrl.navigateForward('login')
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