import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() inCart = true;
  cartItems = this.itemService.cart;
  totalAmount: number = this.itemService.getSumOfCartItems();
  constructor(private itemService: ItemService) {
    this.itemService.itemDeletedInCart.subscribe(() => {
      this.totalAmount = this.itemService.getSumOfCartItems();
    });
  }

  ngOnInit(): void {}
}
