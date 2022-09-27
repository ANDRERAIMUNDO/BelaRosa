import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
    {
      path: 'profile',
      loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
    },
    {
      path: 'categorias',
      loadChildren: () => import('../categoria/categoria.module').then( m => m.CategoriaPageModule)
    },

    {
      path: 'cart',
      loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
    },
    {
      path: 'address',
      loadChildren: () => import('../address/address.module').then( m => m.AddressPageModule)
    },

    {
      path: 'payment-form',
      loadChildren: () => import('../payment-form/payment-form.module').then( m=> m.PaymentFormPageModule)
    },
    {
      path: 'index',
      loadChildren: () => import('../index/index.module').then( m => m.IndexPageModule)
    },
    {
      path: 'produto',
      loadChildren: () => import('../produto/produto.module').then( m => m.ProdutoPageModule)
    },
  
    {
      path: 'produto-detail',
      loadChildren: () => import('../produto-detail/produto-detail.module').then( m => m.ProdutoDetailPageModule)
    },
    {
      path: 'loand',
      loadChildren: () => import('../loand/loand.module').then( m => m.LoandPageModule)
    },
    {
      path: 'circle-adress',
      loadChildren: () => import('../circle/circle.module').then( m => m.CirclePageModule)
    },
 
    {
      path: 'sniper-orde-confirmation',
      loadChildren: () => import('../sniper-orde-confirmation/sniper-orde-confirmation.module').then( m => m.SniperOrdeConfirmationPageModule)
    },
    {
      path: 'pedidos',
      loadChildren: () => import('../pedidos/pedidos.module').then( m => m.PedidosPageModule)
    },
    {
      path: 'circle-upload-image',
      loadChildren: () => import('../circle-upload-image/circle-upload-image.module').then( m => m.CircleUploadImagePageModule)
    },
    {
      path: 'circle-reload',
      loadChildren: () => import('../circle-reload/circle-reload.module').then( m => m.CircleReloadPageModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
