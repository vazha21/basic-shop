import { Item } from '../items-list/item/item.model';

export class User {
  // public cartItems?: Map<number, Item> = new Map();
  public id: number;

  constructor(
    public username: string,
    public email: string,
    public password: string
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
