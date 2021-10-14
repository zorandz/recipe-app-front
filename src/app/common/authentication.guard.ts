import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { NotificationType } from './enum/notification-type.enum';

@Injectable({providedIn: 'root'})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router,
              private notificationService: NotificationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn(): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    this.notificationService.notify(NotificationType.ERROR, `You need to log in to access this page`);
    return false;
  }

}
