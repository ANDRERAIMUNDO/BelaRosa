import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircleLoginPage } from './circle-login.page';

const routes: Routes = [
  {
    path: '',
    component: CircleLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircleLoginPageRoutingModule {}
