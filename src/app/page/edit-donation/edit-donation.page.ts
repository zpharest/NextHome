import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-donation',
  templateUrl: './edit-donation.page.html',
  styleUrls: ['./edit-donation.page.scss'],
})
export class EditDonationPage implements OnInit {
  imageSource: any;
  anuncio: string = '';
  detalhes: string = '';
  donationId: number=0;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const donation = JSON.parse(params['donation']);
      this.donationId = donation.id;
      this.anuncio = donation.anuncio;
      this.detalhes = donation.detalhes;
      this.imageSource = donation.imagem ? donation.imagem : 'assets/imagem/imgadd.png';
    });
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    this.imageSource = image.dataUrl;
  }

  updateDonation() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    const data = {
      id: this.donationId,
      anuncio: this.anuncio,
      detalhes: this.detalhes,
      imagem: this.imageSource,
      nome: user.nome,
      sobrenome: user.sobrenome,
    };

    this.http.post('http://localhost/edit_donation.php', data).subscribe(
      (response: any) => {
        if (response.success) {
          this.navCtrl.navigateBack('home');
        } else {
          alert('Erro ao atualizar doação.');
        }
      },
      (error) => {
        console.error('Erro ao conectar com o servidor.', error);
      }
    );
  }
}
