import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedOutGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.currentLoggedUser) {
      return true;
    } else {
      this.router.navigateByUrl('/items-list');
    }
  }
}
