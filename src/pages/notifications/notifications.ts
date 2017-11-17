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
		this.notifications = notificationsServ.getAll();
  }

	markAsRead(notification){
		console.log('MARK AS READ', notification);
	}

	delete(notification){
		console.log('DELETE', notification);
	};
}
