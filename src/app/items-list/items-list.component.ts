import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  // reference to service's items list.
  items = this.itemService.items;
  admin: boolean;
  @ViewChild('backdrop') backDrop: ElementRef;
  @ViewChild('itemForm') itemForm: ElementRef;

  constructor(
    private itemService: ItemService,
    private authService: AuthService
  ) {
    if (this.authService.currentLoggedUser) {
      this.admin = this.authService.currentLoggedUser.role === 'admin';
    }
    this.itemService.itemFormClosed.subscribe(() => {
      this.backDrop.nativeElement.style.display = 'none';
      this.itemForm.nativeElement.style.display = 'none';
    });
  }

  ngOnInit(): void {}

  onAdd(): void {
    this.backDrop.nativeElement.style.display = 'block';
    this.itemForm.nativeElement.style.display = 'block';
  }
}
