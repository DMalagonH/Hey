import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

	notifications:any;

  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public notificationsServ: NotificationsService,
		public loadingCtrl: LoadingController
	) {

		let loading = this.loadingCtrl.create({
			spinner: 'crescent',
			content: 'Getting notifications...',
			dismissOnPageChange: true,
		});
		loading.present();

		notificationsServ.getAll().valueChanges().subscribe(notifications => {
			this.notifications = notifications;
			loading.dismiss();
		});
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
