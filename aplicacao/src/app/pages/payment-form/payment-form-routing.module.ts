import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentFormPage } from './payment-form.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentFormPage
  },
  {
    path: 'pagamentocartao',
    loadChildren: () => import('../pagamentocartao/pagamentocartao.module').then( m => m.PagamentocartaoPageModule)
  },
  {
    path: 'pagamentopix',
    loadChildren: () => import('../pagamentopix/pagamentopix.module').then( m => m.PagamentopixPageModule)
  },
  {
    path: 'cashpayment',
    loadChildren: () => import('../cashpayment/cashpayment.module').then( m => m.CashpaymentPageModule)
  },
  {
    path: 'order-confirmation-page',
    loadChildren: () => import('../order-confirmation-page/order-confirmation-page.module').then( m => m.OrderConfirmationPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {}
