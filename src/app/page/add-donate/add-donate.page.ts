import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';


@Component({
  selector: 'app-add-donate',
  templateUrl: './add-donate.page.html',
  styleUrls: ['./add-donate.page.scss'],
})
export class AddDonatePage {
  
  imageSource:any = 'assets/imagem/imgadd.png';
  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Photos
    });

    this.imageSource=image.dataUrl;
    }
  showHomePage(){
    this.navCtrl.navigateForward('home')
  }
}
