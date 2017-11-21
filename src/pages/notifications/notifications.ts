import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

	notifications:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notificationsServ: NotificationsService) {
		notificationsServ.getAll().valueChanges().subscribe(notifications => {
			this.notifications = notifications;
		});

		// notificationsServ.upload();
  }

	markAsRead(notification){
		notification.viewed = true;
		this.notificationsServ.edit(notification);
	}

	markAsUnread(notification){
		notification.viewed = false;
		this.notificationsServ.edit(notification);
	}

	delete(notification){
		this.notificationsServ.remove(notification);
	};
}
