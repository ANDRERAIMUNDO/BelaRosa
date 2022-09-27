import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentocartaoPageRoutingModule } from './pagamentocartao-routing.module';

import { PagamentocartaoPage } from './pagamentocartao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PagamentocartaoPageRoutingModule
  ],
  declarations: [PagamentocartaoPage]
})
export class PagamentocartaoPageModule {}
