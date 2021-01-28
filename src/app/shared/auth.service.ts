import { Injectable, Output } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentLoggedUser: User | null;
  @Output() reloadSession = new EventEmitter();

  constructor(private userService: UserService) {}

  logInUser(email: string, password: string): void {
    const user = this.userService.getUserByEmail(email);

    if (!user) {
      alert('such user does not exist!');
      return;
    }

    if (user.password !== password) {
      alert('your password is incorrect');
      return;
    }

    this.currentLoggedUser = user;
    this.reloadSession.emit();
  }

  logOut(): void {
    this.currentLoggedUser = null;
    this.reloadSession.emit();
  }
}
