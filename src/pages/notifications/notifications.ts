import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsService } from '../../services/notifications.service';

import { NotificationDetailPage } from '../notification-detail/notification-detail';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

	notifications = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public notificationsServ: NotificationsService) {
		this.notifications = notificationsServ.getAll();
  }

	notifTapped(notification) {
		this.navCtrl.push(NotificationDetailPage);
		console.log(notification);
	}
}
