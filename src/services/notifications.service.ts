import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsService{
	notifications = [
		{ title: 'Notification 1', body:'Ocurrió un error al intentar eliminar un usuario cuando este no esta registrado en la plataforma', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '6:00 am 17/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 2', body:'N2 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '8:30 pm 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 3', body:'N3 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '6:00 pm 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 4', body:'N4 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '5:25 pm 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 5', body:'N5 Donec maximus justo ac sapien ullamcorper.', appName: "Channeldir", appKey: "456", viewed: false, archived: false, datetime: '2:03 pm 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 6', body:'N6 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '1:00 pm 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 7', body:'N7 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '11:00 am 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 8', body:'N8 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '10:45 am 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 9', body:'N9 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '10:14 am 16/11/17', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 10', body:'N10 Donec maximus justo ac sapien ullamcorper.', appName: "Hey", appKey: "123", viewed: false, archived: false, datetime: '9:45 am 16/11/17', url:'https://github.com/DMalagonH'},
	];

	public getAll(){
		return this.notifications;
	}
}
