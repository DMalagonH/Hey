import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NotificationsService{
	notifications = [
		{ title: 'Notification 4', body:'N4 Donec maximus justo ac sapien ullamcorper.', type: "info", appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '6:00 am 17/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 5', body:'N5 Donec maximus justo ac sapien ullamcorper.', type: "info", appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '8:30 pm 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 6', body:'N6 Donec maximus justo ac sapien ullamcorper.', type: "info", appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '6:00 pm 16/11/17', url:'https://github.com/DMalagonH'}
	];

	firebase_path = 'notifications/';

	constructor(public afDB: AngularFireDatabase){

	}

	public getAll() {
		return this.afDB.list(this.firebase_path);
	}

	public edit(notification) {
		this.afDB.database.ref(this.firebase_path+notification.id).set(notification);
	}

	public remove(notification) {
		this.afDB.database.ref(this.firebase_path+notification.id).remove();
	}

	public upload(){
		let self = this;
		this.notifications.forEach((n) => {
			let id = Date.now();
			this.afDB.database.ref(this.firebase_path + id).set(n);
		})
	}
}
