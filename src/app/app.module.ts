import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
import { AddressComponent } from './checkout/address/address.component';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './items/details/details.component';
import { ItemComponent } from './items/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    //CheckoutComponent,
    ConfirmationComponent,
    AddressComponent,
    ItemsComponent,
    DetailsComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
