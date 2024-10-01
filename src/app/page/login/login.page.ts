import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;    // Declarar a propriedade email
  password: string; // Declarar a propriedade password

  constructor(
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router
  ) { 


    // Inicializar as propriedades
    this.email = '';    
    this.password = ''; 
  }

  ngOnInit() {}

  // Método chamado ao enviar o formulário
  onSubmit() {
    if (this.email && this.password) {
      this.showHomePage(); // Navegar para a página inicial
    } else {
      // Aqui você pode adicionar um alerta ou mensagem de erro se necessário
      console.error("Email e senha são obrigatórios!");
    }
  }

  showLogPage() {
    this.navCtrl.navigateForward('register');
  }

  showHomePage() {
    this.navCtrl.navigateForward('home');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  login(){
    this.router.navigate(['home']);
  }
  register(){
    this.router.navigate(['register']);
  }
}