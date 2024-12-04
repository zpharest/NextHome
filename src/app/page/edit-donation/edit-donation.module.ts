import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDonationPageRoutingModule } from './edit-donation-routing.module';

import { EditDonationPage } from './edit-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDonationPageRoutingModule
  ],
  declarations: [EditDonationPage]
})
export class EditDonationPageModule {}
