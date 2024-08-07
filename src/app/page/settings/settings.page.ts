import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage{
  picture!: string;
  constructor() {}

  takePicture() {
    console.log('I will take a picture');
  }

  ngOnInit() {
  }

}
