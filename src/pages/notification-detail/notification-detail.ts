import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification-detail',
  templateUrl: 'notification-detail.html',
})
export class NotificationDetailPage {

	notification = {title: null, body:null, url:null};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.notification = navParams.get('notification');
  }

}
