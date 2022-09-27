import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderConfirmationPagePage } from './order-confirmation-page.page';

const routes: Routes = [
  {
    path: '',
    component: OrderConfirmationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderConfirmationPagePageRoutingModule {}
