import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  donations: any[] = [];
  user: { nome: string; sobrenome: string } | null = null;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.loadUser();
    this.loadDonations();
  }

  loadUser() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  loadDonations() {
    this.http.get('http://localhost/get_donations.php').subscribe(
      (response: any) => {
        this.donations = response;
      },
      (error) => {
        console.error('Erro ao carregar doações.', error);
      }
    );
  }

  showAddPage() {
    this.navCtrl.navigateForward('add-donate');
  }
  editDonation(donation: any) {
    this.navCtrl.navigateForward('edit-donation', {
      queryParams: { donation: JSON.stringify(donation) },
    });
  }
  deleteDonation(id: number) {
    if (confirm('Tem certeza de que deseja excluir esta doação?')) {
      this.http.post('http://localhost/delete_donation.php', { id }).subscribe(
        (response: any) => {
          if (response.success) {
            alert('Doação excluída com sucesso.');
            this.loadDonations(); // Recarregar as doações após exclusão
          } else {
            alert('Erro ao excluir a doação.');
          }
        },
        (error) => {
          console.error('Erro ao excluir doação.', error);
          alert('Erro ao excluir a doação.');
        }
      );
    }
  }
  
}
