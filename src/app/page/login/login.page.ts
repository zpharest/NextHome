import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';
import { AppState } from 'src/store/AppState';
import axios from 'axios'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData = {
    email: '',
    senha: '',
  };

  errorMessage: string = ''; // Mensagem de erro para exibir ao usuário
  successMessage: string = '';// Mensagem de sucesso para exibir ao usuário

  constructor(
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  forgotEmailPassword() {
    this.store.dispatch(show());

    setTimeout(() => {
      this.store.dispatch(hide());
    }, 3000);
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

  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.errorMessage = '';
    this.successMessage = '';
  
    axios.post("http://localhost/login.php", this.formData).then((response) => {
      const responseDataString = response.data.replace('connected successfully', '');
      let responseData;
      try {
        responseData = JSON.parse(responseDataString);
      } catch (e) {
        console.error('Erro ao parsear o JSON:', e);
        this.errorMessage = 'Resposta inválida do servidor.';
        return;
      }
  
      if (responseData && responseData.status === 'success') {
        this.successMessage = 'Login realizado com sucesso!';
  
        // Salvar nome, sobrenome e e-mail no LocalStorage
        const { nome, sobrenome, email } = responseData.user;
        localStorage.setItem('user', JSON.stringify({ nome, sobrenome, email }));
  
        setTimeout(() => {
          this.showHomePage();
        }, 1500);
      } else {
        this.errorMessage = responseData.message || 'Login ou senha incorretos.';
      }
    }).catch((error) => {
      console.error('Erro ao se comunicar com a API:', error);
      this.errorMessage = 'Ocorreu um erro ao tentar fazer login. Verifique sua conexão.';
    });
  }
  
  
  
}
