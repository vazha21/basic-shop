import { Component, OnInit } from '@angular/core';
import {ItemService} from '../shared/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  // reference to service's items list.
  items = this.itemService.items;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

}
