import {Component, Input, OnInit} from '@angular/core';
import {Item} from './item.model';
import {ItemService} from '../../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() inCart = false;
  @Input() currentItem: Item;
  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
  }

  addItemToCart(item: Item): void{
    this.itemService.addItemInCart(item);
  }

  removeItemFromCart(item: Item): void {
    this.itemService.removeItemFromCart(item);
  }

}
