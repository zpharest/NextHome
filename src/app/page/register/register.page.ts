import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';
import { AppState } from 'src/store/AppState';
import axios from 'axios'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nome: string = '';
  sobrenome: string = '';  // Propriedade para armazenar o nome
  email: string = ''; // Propriedade para armazenar o e-mail
  senha: string = ''; // Propriedade para armazenar a senha

  formData = {
    nome:"",
    sobrenome: "",
    email: "",
    senha: "", 
  }

  errorMessage: string = ''; // Mensagem de erro para exibir ao usuário
  successMessage: string = '';// Mensagem de sucesso para exibir ao usuário

  constructor( 
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router,
  ) { 

       // Inicializar as propriedades
       this.email = '';    
       this.senha = ''; 

  }

      

  ngOnInit() {}



  showLoginPage() {
    this.navCtrl.navigateForward('login');
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

  create(){
    this.errorMessage = '';
    this.successMessage = '';
    console.log(this.formData);
   axios.post("http://localhost/user.php", this.formData).then(
    (response)=> {
      console.log(response);
   
        // Remove o texto extra e parseia o JSON
        const responseDataString = response.data.replace('connected successfully', '');
        let responseData;
        try {
          responseData = JSON.parse(responseDataString);
        } catch (e) {
          console.error('Erro ao parsear o JSON:', e);
          this.errorMessage = 'Resposta inválida do servidor.';
          return;
        }

        // Verifique se a resposta contém o status de sucesso
        if (responseData && responseData.status === 'success') {
          this.successMessage = 'registro realizado com sucesso!';
        } else {
          // registro falhou - Exibe a mensagem de erro retornada pela API
          this.errorMessage = responseData.message || 'algum erro ocorreu, tente novamente.';
        }
      }
    ).catch((error) => {
      console.error('Erro ao se comunicar com a API:', error);
      this.errorMessage = 'Ocorreu um erro ao tentar fazer login. Verifique sua conexão.';
    });
  }

}