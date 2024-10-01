import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nome: string = ''; // Propriedade para armazenar o nome
  email: string = ''; // Propriedade para armazenar o e-mail
  senha: string = ''; // Propriedade para armazenar a senha

  constructor( 
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router
  ) { }

  ngOnInit() {}

  showLoginPage() {
    this.navCtrl.navigateForward('login');
  }

  register(){
    this.router.navigate(['home']);
  }
  login(){
    this.router.navigate(['login']);
  }

  showHomePage() {
    this.navCtrl.navigateForward('home');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}