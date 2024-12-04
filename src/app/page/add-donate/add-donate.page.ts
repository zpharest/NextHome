import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-donate',
  templateUrl: './add-donate.page.html',
  styleUrls: ['./add-donate.page.scss'],
})
export class AddDonatePage {
  imageSource: any = 'assets/imagem/imgadd.png';
  anuncio: string = '';
  detalhes: string = '';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    this.imageSource = image.dataUrl;
  }

  postDonation() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  // Dados a serem enviados para o backend
  const data = {
    anuncio: this.anuncio,
    detalhes: this.detalhes,
    imagem: this.imageSource, // Imagem capturada da câmera (Data URL)
    nome: user.nome,
    sobrenome: user.sobrenome,
  };

  // Envia os dados para o servidor PHP
  this.http.post('http://localhost/post_donation.php', data).subscribe(
    (response: any) => {
      if (response.success) {
        // A resposta inclui a URL da imagem após ser salva no servidor
        const imageUrl = response.image_url;  // A URL retornada pelo servidor
        
        // Agora você pode usar a URL da imagem para exibição ou outro processo
        this.imageSource = imageUrl; // Atualiza o source da imagem no front-end

        // Redireciona o usuário para a página inicial ou onde for necessário
        this.navCtrl.navigateForward('home');
      } else {
        alert('Erro ao criar doação.');
      }
    },
    (error) => {
      console.error('Erro ao conectar com o servidor.', error);
    }
  );
}

  }
  
  
  

