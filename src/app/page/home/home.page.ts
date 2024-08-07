import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(  private navCtrl: NavController){

   }

  ngOnInit() {
  }

  showAddPage(){
    this.navCtrl.navigateForward('add-donate')
  }

  showDonatesPage(){
    this.navCtrl.navigateForward('minhas-doacoes')
  }



}
