import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './items-list/item/item.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { IsLoggedOutGuard } from './guards/isLoggedOut.guard';
import { ItemFormComponent } from './item-form/item-form.component';
// import { IsLoggedOutGuard } from './guards/isLoggedOut.guard';
// import { IsLoggedInGuard } from './guards/isLoggedIn.guard';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ItemFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [IsLoggedInGuard, IsLoggedOutGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
