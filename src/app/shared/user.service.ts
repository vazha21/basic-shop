import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // using this for setting id of new users.
  id = 1;
  public users: Map<number, User> = new Map();

  constructor() {}

  addNewUser(user: User): void {
    user.id = this.id++;
    this.users.set(user.id, user);
    console.log(`${user.username} was successfully added!`);
  }

  removeUser(user: User): void {
    this.users.delete(user.id);
  }

  getUserByEmail(email: string): User | null {
    for (const [id, user] of this.users) {
      if (email === user.email) {
        return user;
      }
    }
    return null;
  }
}
