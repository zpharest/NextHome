import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasDoacoesPageRoutingModule } from './minhas-doacoes-routing.module';

import { MinhasDoacoesPage } from './minhas-doacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasDoacoesPageRoutingModule
  ],
  declarations: [MinhasDoacoesPage]
})
export class MinhasDoacoesPageModule {}
