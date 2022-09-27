import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircleUploadImagePage } from './circle-upload-image.page';

const routes: Routes = [
  {
    path: '',
    component: CircleUploadImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircleUploadImagePageRoutingModule {}
