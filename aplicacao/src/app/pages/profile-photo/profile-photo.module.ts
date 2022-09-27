import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProfilePhotoPageRoutingModule } from './profile-photo-routing.module';

import { ProfilePhotoPage } from './profile-photo.page';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePhotoPageRoutingModule,
  ],
  providers: [
    MediaCapture
  ],

  declarations: [ProfilePhotoPage]
})
export class ProfilePhotoPageModule {}
