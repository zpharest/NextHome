import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(

    private router: Router,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['loader']);
  }
  register(){
    this.router.navigate(['register']);
  }

}
