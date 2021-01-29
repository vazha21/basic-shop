import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Item } from '../items-list/item/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      icon: new FormControl('', Validators.required),
    });
  }

  get title(): AbstractControl {
    return this.form.get('title');
  }

  get price(): AbstractControl {
    return this.form.get('price');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get icon(): AbstractControl {
    return this.form.get('icon');
  }

  onSubmit(): void {
    const newItem = new Item(
      this.title.value,
      this.description.value,
      this.price.value,
      this.icon.value
    );
    this.itemService.addItem(newItem);
    this.itemService.itemFormClosed.emit();
  }

  onClose(): void {
    this.itemService.itemFormClosed.emit();
  }
}
