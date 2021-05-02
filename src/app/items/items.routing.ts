import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: ItemsComponent},
  {path: ':id', component: DetailsComponent, data: {breadcrumb: {alias: 'details'}}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ItemsRouting { }
