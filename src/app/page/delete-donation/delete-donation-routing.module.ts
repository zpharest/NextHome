import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteDonationPage } from './delete-donation.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteDonationPageRoutingModule {}
