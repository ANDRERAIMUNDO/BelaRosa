import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircleLoginPageRoutingModule } from './circle-login-routing.module';

import { CircleLoginPage } from './circle-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircleLoginPageRoutingModule
  ],
  declarations: [CircleLoginPage]
})
export class CircleLoginPageModule {}
