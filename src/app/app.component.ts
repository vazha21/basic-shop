import { Component } from '@angular/core';
import { ItemService } from './shared/item.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vashli';
  public cartCount: number = this.itemService.cart.size;
  public userLoggedIn: boolean = !!this.authService.currentLoggedUser;

  constructor(
    private itemService: ItemService,
    private authService: AuthService
  ) {
    this.itemService.itemAddedInCart.subscribe(() => {
      this.cartCount = this.itemService.cart.size;
    });
    this.itemService.itemDeletedInCart.subscribe(() => {
      this.cartCount = this.itemService.cart.size;
    });
    this.authService.reloadSession.subscribe(() => {
      this.userLoggedIn = !!this.authService.currentLoggedUser;
    });
  }
}
