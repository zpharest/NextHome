import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.page.html',
  styleUrls: ['./doacoes.page.scss'],
})
export class DoacoesPage implements OnInit {
  donations: any[] = [];
  filteredDonations: any[] = [];  // Array para armazenar as doações filtradas
  searchTerm: string = '';  // Valor da pesquisa

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.loadDonations();
  }

  loadDonations() {
    this.http.get('http://localhost/get_donations.php').subscribe(
      (response: any) => {
        this.donations = response;
        this.filteredDonations = response;  // Inicializa com todas as doações
      },
      (error) => {
        console.error('Erro ao carregar doações.', error);
      }
    );
  }

  filterDonations() {
    if (!this.searchTerm.trim()) {
      // Se o termo de pesquisa estiver vazio, mostra todas as doações
      this.filteredDonations = this.donations;
    } else {
      // Filtra as doações com base no termo de pesquisa
      this.filteredDonations = this.donations.filter(donation =>
        donation.anuncio.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        donation.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        donation.sobrenome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  showAddPage() {
    this.navCtrl.navigateForward('add-donate');
  }

  openDonationDetails(donation: any) {
    this.navCtrl.navigateForward('/donation-details', {
      queryParams: { donation: JSON.stringify(donation) }
    });
  }
}
