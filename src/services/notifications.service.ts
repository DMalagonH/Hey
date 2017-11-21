import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NotificationsService{
	notifications = [
		{ title: 'Notification 1', body:'N1 Donec maximus justo ac sapien ullamcorper.', type: "info", appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '6:00 am 17/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 2', body:'N2 Donec maximus justo ac sapien ullamcorper.', type: "info", appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '8:30 pm 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 3', body:'N3 Donec maximus justo ac sapien ullamcorper.', type: "info", appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '6:00 pm 16/11/17', url:'https://github.com/DMalagonH'}
	];

	firebase_path = 'notifications/';

	constructor(public afDB: AngularFireDatabase){

	}

	public getAll() {
		return this.afDB.list(this.firebase_path);
	}
}
