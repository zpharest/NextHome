import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';
import { AppState } from 'src/store/AppState';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;    // Declarar a propriedade email
  senha: string; // Declarar a propriedade password

  constructor(
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router,
    private store: Store<AppState>
  ) { 


    // Inicializar as propriedades
    this.email = '';    
    this.senha = ''; 
  }

  ngOnInit() {}

  // Método chamado ao enviar o formulário
  onSubmit() {
    if (this.email && this.senha) {
      this.showHomePage(); // Navegar para a página inicial
    } else {
      // Aqui você pode adicionar um alerta ou mensagem de erro se necessário
      console.error("Email e senha são obrigatórios!");
    }
  }

  forgotEmailPassword(){
    this.store.dispatch(show())

    setTimeout(() =>{
        this.store.dispatch(hide())
    }, 3000)
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