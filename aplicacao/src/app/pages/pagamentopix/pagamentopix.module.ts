import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentopixPageRoutingModule } from './pagamentopix-routing.module';

import { PagamentopixPage } from './pagamentopix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PagamentopixPageRoutingModule
  ],
  declarations: [PagamentopixPage]
})
export class PagamentopixPageModule {}
