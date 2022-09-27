import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationAuthenticationPageRoutingModule } from './registration-authentication-routing.module';

import { RegistrationAuthenticationPage } from './registration-authentication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationAuthenticationPageRoutingModule
  ],
  declarations: [RegistrationAuthenticationPage]
})
export class RegistrationAuthenticationPageModule {}
