import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashpaymentPageRoutingModule } from './cashpayment-routing.module';

import { CashpaymentPage } from './cashpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CashpaymentPageRoutingModule
  ],
  declarations: [CashpaymentPage]
})
export class CashpaymentPageModule {}
