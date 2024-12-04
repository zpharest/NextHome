import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  profile = {
    name: '',
    email: '',
  };

  constructor(private navCtrl: NavController, public menuCtrl: MenuController) {
    this.loadUserProfile();
  }

  // Carregar informações do usuário
  loadUserProfile() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.profile.name = `${user.nome} ${user.sobrenome}`;
      this.profile.email = user.email; // Certifique-se de incluir o email ao salvar o usuário no login
    }
  }
}
