import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDonatePage } from './add-donate.page';

const routes: Routes = [
  {
    path: '',
    component: AddDonatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDonatePageRoutingModule {}
