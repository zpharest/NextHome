import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
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

   // Método chamado ao enviar o formulário
   onSubmit() {
    if (this.email && this.senha) {
      this.showHomePage(); // Navegar para a página inicial
    } else {
      // Aqui você pode adicionar um alerta ou mensagem de erro se necessário
      console.error("Email e senha são obrigatórios!");
    }
  }


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
    console.log(this.formData);
   axios.post("http://localhost/user.php", this.formData).then(
    (response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    
  }

}