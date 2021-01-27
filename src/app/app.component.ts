import { Component } from '@angular/core';
import {ItemService} from './shared/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vashli';
  public cartCount: number = this.itemService.cart.size;
  constructor(private itemService: ItemService) {
    this.itemService.itemAddedInCart.subscribe(() => {
      this.cartCount = this.itemService.cart.size;
    });
    this.itemService.itemDeletedInCart.subscribe(() => {
      this.cartCount = this.itemService.cart.size;
    });
  }
}
