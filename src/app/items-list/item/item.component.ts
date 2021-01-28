import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from '../../shared/item.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() inCart = false;
  @Input() currentItem: Item;

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addItemToCart(item: Item): void {
    if (!this.authService.currentLoggedUser) {
      alert('Please log in first!');
      this.router.navigate(['/login']);
      return;
    }
    this.itemService.addItemInCart(item);
  }

  removeItemFromCart(item: Item): void {
    this.itemService.removeItemFromCart(item);
  }
}
