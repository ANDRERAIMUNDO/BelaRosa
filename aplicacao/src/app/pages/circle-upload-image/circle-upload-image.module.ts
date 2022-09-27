import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircleUploadImagePageRoutingModule } from './circle-upload-image-routing.module';

import { CircleUploadImagePage } from './circle-upload-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircleUploadImagePageRoutingModule
  ],
  declarations: [CircleUploadImagePage]
})
export class CircleUploadImagePageModule {}
