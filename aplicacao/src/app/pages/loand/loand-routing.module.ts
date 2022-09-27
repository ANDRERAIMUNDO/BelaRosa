import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoandPage } from './loand.page';

const routes: Routes = [
  {
    path: '',
    component: LoandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoandPageRoutingModule {}
