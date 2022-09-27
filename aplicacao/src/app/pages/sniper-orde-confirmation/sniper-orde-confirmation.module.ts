import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SniperOrdeConfirmationPageRoutingModule } from './sniper-orde-confirmation-routing.module';

import { SniperOrdeConfirmationPage } from './sniper-orde-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SniperOrdeConfirmationPageRoutingModule
  ],
  declarations: [SniperOrdeConfirmationPage]
})
export class SniperOrdeConfirmationPageModule {}
