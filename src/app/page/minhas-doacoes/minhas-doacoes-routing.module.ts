import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasDoacoesPage } from './minhas-doacoes.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasDoacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasDoacoesPageRoutingModule {}
