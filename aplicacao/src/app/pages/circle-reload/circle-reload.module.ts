import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircleReloadPageRoutingModule } from './circle-reload-routing.module';

import { CircleReloadPage } from './circle-reload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircleReloadPageRoutingModule
  ],
  declarations: [CircleReloadPage]
})
export class CircleReloadPageModule {}
