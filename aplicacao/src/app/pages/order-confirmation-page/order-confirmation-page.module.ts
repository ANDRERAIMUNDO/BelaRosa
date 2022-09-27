import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderConfirmationPagePageRoutingModule } from './order-confirmation-page-routing.module';

import { OrderConfirmationPagePage } from './order-confirmation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrderConfirmationPagePageRoutingModule
  ],
  declarations: [OrderConfirmationPagePage]
})
export class OrderConfirmationPagePageModule {}
