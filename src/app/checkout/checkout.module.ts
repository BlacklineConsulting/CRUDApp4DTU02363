import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRouting } from './checkout.routing';
import { SharedModule } from '../shared/shared.module';
import { AddressComponent } from './address/address.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [CheckoutComponent, AddressComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    CheckoutRouting,
    SharedModule
  ]
})
export class CheckoutModule { }
