import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-donate',
  templateUrl: './add-donate.page.html',
  styleUrls: ['./add-donate.page.scss'],
})
export class AddDonatePage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  showHomePage(){
    this.navCtrl.navigateForward('home')
  }
}
