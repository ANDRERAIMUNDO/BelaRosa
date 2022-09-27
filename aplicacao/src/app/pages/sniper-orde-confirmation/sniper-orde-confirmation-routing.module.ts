import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SniperOrdeConfirmationPage } from './sniper-orde-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: SniperOrdeConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SniperOrdeConfirmationPageRoutingModule {}
