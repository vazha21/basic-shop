import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { IsLoggedOutGuard } from './guards/isLoggedOut.guard';

const routes: Routes = [
  { path: 'items-list', component: ItemsListComponent },
  { path: 'cart', component: CartComponent, canActivate: [IsLoggedInGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsLoggedOutGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedOutGuard] },
  { path: '', redirectTo: 'items-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
