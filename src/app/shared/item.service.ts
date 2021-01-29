import { Injectable } from '@angular/core';
import { Item } from '../items-list/item/item.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemDeletedInCart = new EventEmitter();
  itemAddedInCart = new EventEmitter();
  itemFormClosed = new EventEmitter();
  id = 5;
  constructor() {
    this.items.set(
      1,
      new Item(
        'Honda civic 2019',
        'this car will serve u as a good friend',
        500,
        'fas fa-car',
        1
      )
    );
    this.items.set(
      2,
      new Item(
        'Cooking book',
        'This book is nice about cooks',
        35,
        'fas fa-book',
        2
      )
    );

    this.items.set(
      3,
      new Item(
        'Big ass house',
        'This house gonna fit whole elephant',
        60000,
        'fas fa-home',
        3
      )
    );

    this.items.set(
      4,
      new Item(
        'Nice ball',
        'Big Big ball to play with football soccer or just any ohter psort  need dummy text god admn it and i hate lorem',
        25,
        'fas fa-basketball-ball',
        4
      )
    );
  }

  items: Map<number, Item> = new Map();
  cart: Map<number, Item> = new Map();

  addItem(item: Item): void {
    item.id = this.id++;
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
    this.cart.forEach((value) => (sum += value.price));
    return sum;
  }
}
