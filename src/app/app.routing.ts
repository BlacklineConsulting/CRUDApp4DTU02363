import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'items', loadChildren: () => import('./items/items.module').then(mod => mod.ItemsModule), data: { breadcrumb: 'Items' } },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(mod => mod.CartModule), data: { breadcrumb: 'Cart' } },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module')
      .then(mod => mod.CheckoutModule), data: { breadcrumb: 'Checkout' }
  },

  {
    path: 'account',
    loadChildren: () => import('./account/account.module')
      .then(mod => mod.AccountModule), data: { breadcrumb: { skip: true } }
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
