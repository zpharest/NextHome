import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDonatePageRoutingModule } from './add-donate-routing.module';

import { AddDonatePage } from './add-donate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDonatePageRoutingModule
  ],
  declarations: [AddDonatePage]
})
export class AddDonatePageModule {}
