import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { ItemsRouting } from './items.routing';

@NgModule({
  declarations: [ItemsComponent, ItemComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ItemsRouting
  ]
})
export class ItemsModule { }
