import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: 'items-list', component: ItemsListComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'items-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

