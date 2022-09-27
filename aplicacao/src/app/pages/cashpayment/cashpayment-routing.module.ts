import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashpaymentPage } from './cashpayment.page';

const routes: Routes = [
  {
    path: '',
    component: CashpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashpaymentPageRoutingModule {}
