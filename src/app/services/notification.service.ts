import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '../common/enum/notification-type.enum';

@Injectable({providedIn: 'root'})
export class NotificationService {

  constructor(private notifier: NotifierService) {}

  public notify(type: NotificationType, message: string) {
    this.notifier.notify(type, message);
  }
}
