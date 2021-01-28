import { Injectable, Output } from '@angular/core';
import { Item } from '../items-list/item/item.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  @Output() itemDeletedInCart = new EventEmitter();
  @Output() itemAddedInCart = new EventEmitter();

  constructor() {
    this.items.set(
      1,
      new Item(
        1,
        'Honda civic 2019',
        'this car will serve u as a good friend',
        500,
        'fas fa-car'
      )
    );
    this.items.set(
      2,
      new Item(
        2,
        'Cooking book',
        'This book is nice about cooks',
        35,
        'fas fa-book'
      )
    );
  }

  items: Map<number, Item> = new Map();
  cart: Map<number, Item> = new Map();

  addItem(item: Item): void {
    this.items.set(item.id, item);
  }

  removeItem(item: Item): void {
    this.items.delete(item.id);
  }

  addItemInCart(item: Item): void {
    this.cart.set(item.id, item);
    this.itemAddedInCart.emit();
  }

  removeItemFromCart(item: Item): void {
    this.cart.delete(item.id);
    this.itemDeletedInCart.emit();
  }

  getSumOfCartItems(): number {
    let sum = 0;
    for (const [key, value] of this.cart) {
      sum += value.price;
    }
    return sum;
  }
}
