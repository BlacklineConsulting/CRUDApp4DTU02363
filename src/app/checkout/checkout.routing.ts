import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {path: '', component: CheckoutComponent},
  {path: 'success', component: ConfirmationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRouting { }
