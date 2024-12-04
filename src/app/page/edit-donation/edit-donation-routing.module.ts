import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDonationPage } from './edit-donation.page';

const routes: Routes = [
  {
    path: '',
    component: EditDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDonationPageRoutingModule {}
