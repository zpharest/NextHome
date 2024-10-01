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
  password: string = ''; // Propriedade para armazenar a senha

  constructor( 
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router,
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