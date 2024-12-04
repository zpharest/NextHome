import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteDonationPageRoutingModule } from './delete-donation-routing.module';

import { DeleteDonationPage } from './delete-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteDonationPageRoutingModule
  ],
  declarations: [DeleteDonationPage]
})
export class DeleteDonationPageModule {}
