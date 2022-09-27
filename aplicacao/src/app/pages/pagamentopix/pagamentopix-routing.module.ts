import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentopixPage } from './pagamentopix.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentopixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentopixPageRoutingModule {}
