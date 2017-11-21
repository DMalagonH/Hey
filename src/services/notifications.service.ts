import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NotificationsService{
	public firebase_path:string = 'notifications/';

	constructor(public afDB: AngularFireDatabase){}

	public getAll() {
		return this.afDB.list(this.firebase_path);
	}

	public edit(notification) {
		this.afDB.database.ref(this.firebase_path+notification.id).set(notification);
	}

	public remove(notification) {
		this.afDB.database.ref(this.firebase_path+notification.id).remove();
	}
}
